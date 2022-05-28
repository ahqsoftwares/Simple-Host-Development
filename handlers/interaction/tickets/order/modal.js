const {get, getD, setD} = require("../database/orders/index");
module.exports = async function(i) {
         if (!(i.channel.name == `order-${i.member.user.id}`)) {
                  await i.createMessage({
                           content: "Its not for  you!",
                           flags: 64
                  });
                  return;
         }
         setD(i.member.user.id, {
                  name: i.data.components[0].components[0].value,
                  id: i.data.components[1].components[0].value,
                  embed: i.data.components[2].components[0].value || "Random color every time!",
                  status: i.data.components[3].components[0].value || "No status",
                  banner: i.data.components[3].components[0].value || "No banner/support server invite url was provided!",
         });
         await i.channel.edit({
                  permissionOverwrites: [
                           {
                                    id: i.member.guild.id,
                                    deny: 1024
                           },
                           {
                                    id: `979761117846990878`,
                                    allow: 979761117846990879,
                           },
                           {
                                    id: i.member.user.id,
                                    type: 1,
                                    allow: 1024
                           },
                           {
                                    id: "979033028020023317",
                                    allow: 1024
                           }
                  ]
         });
         let data = getD(i.member.user.id);
         await i.editParent({
                  embeds: [{
                           title: "Order Placed!",
                           description: "The order was placed successfully!\nOur Devs will reply back to youe order soon!",
                           color: require("../../../colors").GREEN
                  }],
                  components: [{
                           type: 1,
                           components: [{
                                    type: 2,
                                    style: 4,
                                    label: "Cancel order",
                                    custom_id: "cancel_bot_order_admin",
                                    emoji: {
                                             name: "🛑"
                                    }
                           }]
                  }]
         });
         await i.channel.createMessage({
                  content: `<@&979761117846990878> New order!`,
                  embeds: [{
                           color: require("../../../colors").GREEN,
                           title: "Order details!",
                           description: `Type of bot ${get(i.member.user.id)}`,
                           fields: [{
                                    name: "Bot name",
                                    value: `${data.name}`,
                                    inline: true
                           }, {
                                    name: "Bot id",
                                    value: `${data.id}`,
                                    inline: true
                           }, {
                                    name: "Default embed color",
                                    value: `${data.embed}`,
                                    inline: true
                           }, {
                                    name: "Bot status",
                                    value: `${bot.status}`,
                                    inline: true
                           }, {
                                    name: "Support server invite / banner url",
                                    value: `${bot.banner}`,
                                    inline: true
                           }]
                  }],
                  components: [{
                           type: 1,
                           components: [{
                                    type: 2,
                                    style: 3,
                                    label: "Claim the order!",
                                    emoji: {
                                             name: "✅"
                                    },
                                    custom_id: "bot_order_claim"
                           }, {
                                    type: 2,
                                    style: 4,
                                    label: "Force cancel order!",
                                    custom_id: "cancel_bot_order_admin",
                                    emoji: {
                                             name: "🛑"
                                    }
                           }]
                  }]
         });
}