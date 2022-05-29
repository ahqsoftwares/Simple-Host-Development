(async() => {
         const app = require("express")();
         const  {Database} = require("quickmongo");
         let password = "";
         let chars = [
                  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                  ["AhQ", "SoTFwArEs", "JailDEv", "Yruo"]
         ];
         for (i = 0; i < 12; i++) {
                  let part = (Math.round(Math.random() * 2));
                  let num = chars[part][Math.round(Math.random() * chars[part].length)];
                  password += String(num);
         }
         const db = new Database(process.env.db);

         db.on("ready", () => console.log("Database ready!" + "\nPassword: " + password));
         await db.connect();


         app.listen(17515);
         app.get("/verify", async(req, res) => {
                  if (!(req.query.code || req.query.user)) {
                           res.send({
                                    type: "Error",
                                    desc: "Invalid args!"
                           });
                           return;
                  }
                  if (!(req.query.code == (await(db.get(req.query.user))))) {
                           res.send({
                                    type: "Error"
                           });
                           return;
                  }
                  res.send({
                           type: "License Confirmed"
                  });
         });
         app.get("/add", async(req, res) => {
                  console.log(req.query.author, password);
                  if (req.query.author != password) {
                           res.send({
                                    type: "Error"
                           });
                           return
                  }
                  if (!(req.query.code || req.query.user)) {
                           res.send({
                                    type: "Error",
                                    desc: "Invalid args!"
                           });
                           return;
                  }
                  if (await(db.has(req.query.user))) {
                           await res.send({
                                    code: await db.get(req.query.user)
                           });
                  } else {
                           db.set(req.query.user, req.query.code);
                           await res.send({
                                    code: req.query.code
                           });
                  }
         });
})()