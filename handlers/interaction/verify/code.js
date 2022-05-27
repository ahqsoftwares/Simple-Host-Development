const {set} = require("./database");
module.exports = async function (i) {
         let result = set(i.member.user.id);
         await i.createModal({
                  title: String(result),
                  custom_id: "verify_modal",
                  components: [{
                           type: 1,
                           components: [{
                                    type: 4,
                                    custom_id: "input_captcha",
                                    label: "Enter your answer",
                                    style: 1,
                                    required: true,
                                    placeholder: "20"
                           }]
                  }]
         });
}