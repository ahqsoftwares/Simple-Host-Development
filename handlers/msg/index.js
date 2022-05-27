function load(module, ...args) {
         require(`./${module}`)(...args);
}
module.exports = async function(msg, client) {
         if (msg.content == "ss!rules") {
                  load("rules.js", msg);
         } else if (msg.content == "ss!tickets") {
                  if (!msg.member.permissions.has("administrator")) {
                           load("tickets.js", msg, client);
                  } else {
                           await msg.channel.createMessage({
                                    messageReference: {
                                             messageID: msg.id,
                                             failIfNotExists: false
                                    },
                                    allowedMentions: {
                                             repliedUser: true
                                    },
                                    content: "Your brain is not smart enough to do it!"
                           });
                  }
         }
}