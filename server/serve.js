const app = require("express")().listen(3000);
const database = require("quickmongo");
const db = new database(process.env.db);

app.get("/verify", async(req, res) => {
         if (!(req.headers[`x-license`] == (await(db.get(req.headers[`x-user-id`]))))) {
                  res.send({
                           type: "Error"
                  });
         }
         res.send({
                  type: "License Confirmed"
         });
});