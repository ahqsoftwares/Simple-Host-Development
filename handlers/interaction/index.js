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
         } else if (i.data.custom_id == "cancel_bot_order") {
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
                  console.log(i.data);
                  require("./tickets/order/modal")(i);
         }
}