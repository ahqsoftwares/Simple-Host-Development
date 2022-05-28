const {set} = require("../database/orders/index");
module.exports = async function(i) {
         set(i.member.user.id, i.data.values[0]);
         await i.createModal({
                  custom_id: "bot_ask_questions",
                  title: "Please give us some info about your bot!",
                  components: [{
                           type: 1,
                           components: [{
                                    type: 4,
                                    custom_id: "bot_name",
                                    style: 1,
                                    label: "Bot name!",
                                    required: true,
                                    placeholder: "Clyde!"
                           }, {
                                    type: 4,
                                    custom_id: "bot_id",
                                    style: 1,
                                    label: "Bot id!",
                                    required: true,
                                    placeholder: String(i.member.user.id)
                           }, {
                                    type: 4,
                                    custom_id: "bot_color",
                                    style: 1,
                                    label: "Embed color!",
                                    required: false,
                                    placeholder: "random"
                           }, {
                                    type: 4,
                                    custom_id: "bot_status",
                                    label: "Status type and name",
                                    style: 2,
                                    required: false,
                                    placeholder: "Type: Playing\nName: Simple Host Development"
                           }, {
                                    type: 4,
                                    custom_id: "bot_menu",
                                    label: "Help menu url",
                                    style: 1,
                                    required: false
                           }, {
                                    type: 4,
                                    custom_id: "bot_helpmenu",
                                    style: 1,
                                    label: "Help menu invite link",
                                    required: false
                           }]
                  }]
         });
}