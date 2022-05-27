const eris = require("eris");
const process = require("process");
process.on("uncaughtException", console.log);
require("eris-modals")(eris);

const client = new eris(process.env.token, {
         intents: ["all"]
});
client.on("ready", () => {
         console.log("bot is online!");
});