module.exports = async function(i, client) {
         await i.acknowledge(64);
         if (i.guild.channes.some(ch => ch.name == `support-${i.member.user.id}`)) {
                  await i.editParent({
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
                                    id: "979799136117338133",
                                    allow: 518349388881
                           },
                           {
                                    id: "979033028020023317",
                                    allow: 1024
                           }
                  ]
         }).then(async(ch) => {
                  await i.editParent({
                           content: `Your support ticket:- <#${ch.id}>`
                  });
                  await ch.createMessage({
                           content: `<@&979799136117338133>\nWelcome <@!${i.member.user.id}> to your support ticket!\nPlease describe your query as the staffs come to help you!`,
                           embeds: [],
                           components: []
                  });
         });
}