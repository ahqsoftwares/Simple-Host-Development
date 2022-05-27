const eris = require("eris");
require("eris-modals")(eris);

const client = new eris(process.env.token, {
         intents: ["all"]
});
client.on("ready", () => {
         console.log("bot is online!");
});