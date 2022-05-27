function load(module, ...args) {
         require(`./${module}`)(...args);
}
module.exports = async function(i, client) {
         console.log(i);
         if (i.data.custom_id == "verify_me") {
                  load("verify/code")(i);
         } else if (i.data.custom_id == "verify_modal") {
                  load("verify/validate")(i);
         }
}