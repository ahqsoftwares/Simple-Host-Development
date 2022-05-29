(async() => {
         const eris = require("./modules/eris");
         const process = require("process");
         process.on("uncaughtException", (e) => console.log(e));

         const client = new eris(process.env.token, {
                  intents: ["all"]
         });
         client.connect()
         require("./server/serve");
         client.on("error", (e) => console.log(e));

         client.on("ready", () => {
                  console.log("bot is online!");
                  client.editStatus("dnd", {
                           name: "Simple Host Development",
                           type: 3
                  });
         });

         client.on("messageCreate", async(msg) => {
                  msg.guild = msg.channel.guild;
                  require("./handlers/msg/index.js")(msg, client);
         });

         client.on("interactionCreate", async(i) => {
                  i.guild = i.channel.guild;
                  require("./handlers/interaction/index.js")(i, client);
         });
})()

    