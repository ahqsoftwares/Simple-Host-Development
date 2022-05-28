module.exports = async function(i) {
         await i.defer(64);
         if (i.guild.channels.some(ch => ch.name == `order-${i.member.user.id}`)) {
                  await i.editOriginalMessage({
                           content: "You already have a bot order ticket!"
                  });
                  return;
         }

         i.guild.createChannel(`order-${i.member.user.id}`, 0, {
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
                           content: `Your bot order ticket:- <#${ch.id}>`
                  });
                  await ch.createMessage({
                           content: `Welcome <@!${i.member.user.id}> to your bot order ticket!`,
                           embeds: [{
                                    title: "Your Order has started now!",
                                    description: "Please select the type of your order!"
                           }],
                           components: [{
                                    type: 1,
                                    components: [{
                                             type: 3,
                                             custom_id: "bot_select_type",
                                             placeholder: "Please select the type of bot!",
                                             options: [{
                                                      label: "Moderation",
                                                      value: "bot_mod",
                                                      description: "I'll order a moderation bot!",
                                                      emoji: {
                                                               name: "⚙️"
                                                      }
                                             }, {
                                                      label: "Economy",
                                                      value: "bot_eco",
                                                      description: "I'll order an economy bot like owo!",
                                                      emoji: {
                                                               name: "💰"
                                                      }
                                             }, {
                                                      label: "Fun",
                                                      value: "bot_fun",
                                                      description: "I'll order a fun and games bot!",
                                                      emoji: {
                                                               name: "😄"
                                                      }
                                             }]
                                    }]
                           }, {
                                    type: 1,
                                    components: [{
                                             type: 2,
                                             style: 4,
                                             label: "Cancel order!",
                                             custom_id: "cancel_bot_order",
                                             emoji: {
                                                      name: "🔴"
                                             }
                                    }]
                           }]
                  });
         });
}