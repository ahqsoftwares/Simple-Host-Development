const {get, getE, getD, setD} = require("../database/orders/index");
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
                  embed: i.data.components[2].components[0].value || "No value was provided!",
                  status: i.data.components[3].components[0].value || "No value was provided!",
                  banner: i.data.components[3].components[0].value || "No value was provided!",
         });
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
                                    custom_id: "cancel_bot_order",
                                    emoji: {
                                             name: "🛑"
                                    }
                           }]
                  }]
         });
}