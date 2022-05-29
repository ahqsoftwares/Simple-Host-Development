const app = require("express")();
const  {Database} = require("quickmongo");
const db = new Database(process.env.db);

app.listen(17515);
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