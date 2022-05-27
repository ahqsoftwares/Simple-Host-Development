const {validate} = require("./database.js");
module.exports = async function (i, client) {
         if (validate(i.member.user.id, i.data.components[0].components[0].value)) {
                  try {
                           await client.addGuildMemberRole(i.guild.id, i.member.user.id, "979027294888816640", "Verified!");
                  } catch (e) {
                           await i.createMessage({
                                    content: "Could not verify! Internal server error!",
                                    flags: 64
                           });
                           return;
                  }
                  await i.createMessage({
                           content: "Verified successfully! :white_check_mark:",
                           flags: 64
                  });
         } else {
                  await i.createMessage({
                           content: "Sorry! Wrong captcha!",
                           flags: 64
                  });
         }
}