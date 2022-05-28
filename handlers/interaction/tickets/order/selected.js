const {set, setE} = require("../database/orders/index");
module.exports = async function(i) {
         if (!(i.channel.name == `order-${i.member.user.id}`)) {
                  await i.createMessage({
                           content: "Its not for  you!",
                           flags: 64
                  });
                  return;
         }
         set(i.member.user.id, i.data.values[0]);
         setE(i.member.user.id, i.message);
         await i.createModal({
                  custom_id: "bot_ask_questions",
                  title: "Please give us some info about your bot!",
                  components: [{
                           type: 1,
                           components: [{type: 4,
                                    custom_id: "bot_name",
                                    style: 1,
                                    label: "Bot name!",
                                    required: true,
                                    placeholder: "Clyde!"}]
                  }, {
                           type: 1,
                           components: [{type: 4,
                                    custom_id: "bot_id",
                                    style: 1,
                                    label: "Bot id!",
                                    required: true,
                                    placeholder: String(i.member.user.id),
                                    min_length: String(i.member.user.id).length,
                                    max_length: String(i.member.user.id).length
                           }]
                  }, {
                           type: 1,
                           components: [{type: 4,
                                    custom_id: "bot_color",
                                    style: 1,
                                    label: "Embed color!",
                                    required: false,
                                    placeholder: "random"}]
                  }, {
                           type: 1,
                           components: [{ type: 4,
                                    custom_id: "bot_status",
                                    label: "Bot Status, type and name",
                                    style: 2,
                                    required: false,
                                    placeholder: "Status: Idle\nType: Playing\nName: Simple Host Development"}]
                  }, {
                           type: 1,
                           components: [{type: 4,
                                    custom_id: "bot_menu",
                                    label: "Banner & support server invite",
                                    style: 2,
                                    required: false,
                                    placeholder: "banner: \nsupport server: "
                           }]
                  }]
         });
}