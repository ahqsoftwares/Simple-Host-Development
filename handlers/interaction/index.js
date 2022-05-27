module.exports = async function(i, client) {
         if (i.data.custom_id == "verify_me") {
                  require("./verify/code")(i);
         } else if (i.data.custom_id == "verify_modal") {
                  require("./verify/validate")(i, client);
         }
}