module.exports = async function(i, client) {
         await i.defer(64);
         if (i.guild.channels.some(ch => ch.name == `support-${i.member.user.id}`)) {
                  await i.editOriginalMessage({
                           content: "You already have a support ticket!"
                  });
                  return;
         }

         i.guild.createChannel(`support-${i.member.user.id}`, 0, {
                  parentID: "979794564833501264",
                  permissionOverwrites: [
                           {
                                    id: i.guild.id,
                                    deny: 1024
                           },
                           {
                                    id: i.member.user.id,
                                    allow: 1024,
                                    type: 1
                           },
                           {
                                    id: "979034198105006111",
                                    allow: 518349388881
                           },
                           {
                                    id: "979033028020023317",
                                    allow: 1024
                           }
                  ]
         }).then(async(ch) => {
                  await i.editOriginalMessage({
                           content: `Your support ticket:- <#${ch.id}>`
                  });
                  await ch.createMessage({
                           content: `<@&979034198105006111>\nWelcome <@!${i.member.user.id}> to your support ticket!\nPlease describe your query as the staffs come to help you!`,
                           embeds: [],
                           components: [{
                                    type: 1,
                                    components: [{
                                             type: 2,
                                             style: 4,
                                             label: "Close support ticket!",
                                             custom_id: "cancel_bot_order_support",
                                             emoji: {
                                                      name: "🛑"
                                             }
                                    }]
                           }]
                  });
         });
}