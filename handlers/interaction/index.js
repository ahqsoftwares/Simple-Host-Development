module.exports = async function(i, client) {
         if (i.data.custom_id == "verify_me") {
                  require("./verify/code")(i);
         } else if (i.data.custom_id == "verify_modal") {
                  require("./verify/validate")(i, client);
         } else if (i.data.custom_id == "make_a_bot_order") {
                  require("./tickets/order/order")(i, client);
         } else if (i.data.custom_id == "make_a_partner_ticket") {
                  require("./tickets/partner")(i, client);
         } else if (i.data.custom_id == "make_a_support_ticket") {
                  require("./tickets/support")(i, client);
         } else if (i.data.custom_id.startsWith("cancel_bot_order")) {
                  if (i.data.custom_id.includes("admin")) {
                           if (!i.member.roles.includes("979033028020023317")) {
                                    await i.createMessage({
                                             content: "You are not authorised to do it! Ask a staff member to close it with a valid reason!",
                                             flags: 64
                                    });
                                    return;
                           }
                  }
                           await i.editParent({
                                    content: "Your order has been cancelled!\nTicket deleting in 20 seconds!",
                                    embeds: [],
                                    components: []
                           });
                           setTimeout(async function() {
                                    await i.channel.delete()
                           }, 20 * 1000);
         } else if (i.data.custom_id == "bot_select_type") {
                  require("./tickets/order/selected")(i)
         } else if (i.data.custom_id == "bot_ask_questions") {
                  require("./tickets/order/modal")(i);
         } else if (i.data.custom_id == "bot_order_claim") {
                  if (!i.member.roles.includes("979761117846990878")) {
                           await i.createMessage({
                                    content: "You are not a dev to claim this order!",
                                    flags: 64
                           });
                           return;
                  }
                  await i.editParent({
                           content: `Order accepted by <@!${i.member.user.id}>`,
                           components: [{
                                    type: 1,
                                    components: [{
                                             type: 2,
                                             style: 3,
                                             label: `Claimed by ${i.member.user.username}#${i.member.user.discriminator}`,
                                             emoji: {
                                                      name: "✅"
                                             },
                                             custom_id: "bot_order_claim",
                                             disabled: true
                                    }, {
                                             type: 2,
                                             style: 4,
                                             label: "Cancel order!",
                                             custom_id: "cancel_bot_order_admin",
                                             emoji: {
                                                      name: "🛑"
                                             }
                                    }]
                           }]
                  });
         }
}