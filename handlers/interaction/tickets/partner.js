module.exports = async function(i, client) {
         await i.defer(64);
         if (i.guild.channels.some(ch => ch.name == `partner-${i.member.user.id}`)) {
                  await i.editOriginalMessage({
                           content: "You already have a partnership ticket!"
                  });
                  return;
         }

         i.guild.createChannel(`partner-${i.member.user.id}`, 0, {
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
                  await i.editOriginalMessage({
                           content: `Your partnership ticket:- <#${ch.id}>`
                  });
                  await ch.createMessage({
                           content: `Welcome <@!${i.member.user.id}> to your partnership application!`,
                           embeds: [],
                           components: []
                  });
         });
}