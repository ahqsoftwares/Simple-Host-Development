(async() => {
         const eris = require("eris");
         const process = require("process");
         process.on("uncaughtException", console.log);
         require("eris-modals")(eris);

         const client = new eris(process.env.token, {
                  intents: ["all"]
         });
         client.connect()

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
         client.createCommand("ping", "Pong!", { // Make a ping command
            // Responds with "Pong!" when someone says "!ping"
                description: "Pong!",
                fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored.",
                reactionButtons: [ // Add reaction buttons to the command
                    {
                        emoji: "⬅",
                        type: "edit",
                        response: (msg) => { // Reverse the message content
                            return msg.content.split().reverse().join();
                        }
                    },
                    {
                        emoji: "🔁",
                        type: "edit", // Pick a new pong variation
                        response: ["Pang!", "Peng!", "Ping!", "Pong!", "Pung!"]
                    },
                    {
                        emoji: "⏹",
                        type: "cancel" // Stop listening for reactions
                    }
                ],
                reactionButtonTimeout: 30000 // After 30 seconds, the buttons won't work anymore
            });
})()

    