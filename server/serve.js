(async() => {
         const app = require("express")();
         const  {Database} = require("quickmongo");
         const db = new Database(process.env.db);

         db.on("ready", () => console.log("Database ready!"));
         await db.connect();


         app.listen(17515);
         app.get("/verify", async(req, res) => {
                  if (!(req.headers[`x-license`] || req.headers[`x-user-id`])) {
                           res.send({
                                    type: "Error",
                                    desc: "Invalid args!"
                           });
                           return;
                  }
                  if (!(req.headers[`x-license`] == (await(db.get(req.headers[`x-user-id`]))))) {
                           res.send({
                                    type: "Error"
                           });
                           return;
                  }
                  res.send({
                           type: "License Confirmed"
                  });
         });
})()