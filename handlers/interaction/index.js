module.exports = async function(i, client) {
         if (i.data.custom_id == "verify_me") {
                  require("./verify/code")(i);
         } else if (i.data.custom_id == "verify_modal") {
                  require("./verify/validate")(i, client);
         } else if (i.data.custom_id == "make_a_bot_order") {
                  require("./tickets/order")(i, client);
         } else if (i.data.custom_id == "make_a_partner_ticket") {
                  require("./tickets/partner")(i, client);
         } else if (i.data.custom_id == "make_a_support_ticket") {
                  require("./tickets/support")(i, client);
         }
}