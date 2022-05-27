module.exports = async function (msg, client) {
         msg.channel.createMessage({
                  content: "Please select the type of ticket!",
                  components: [
                           {
                                    type: 1,
                                    components: [{
                                             type: 2,
                                             style: 1,
                                             label: "Order Bot",
                                             custom_id: "order_bot_ticket"
                                    }, {
                                             type: 2,
                                             style: 1,
                                             label: "Support",
                                             custom_id: "support_ticket"
                                    }, 
                                    {
                                             type: 2,
                                             style: 1,
                                             label: "Partner",
                                             custom_id: "partner_ticket"
                                    }]
                           }
                  ]
         }).then(async() => {
                  await msg.delete();
                  client.on("interactionCreate", async(i) => {
                           if (i.data.custom_id.includes("_ticket") && i.user.id == msg.author.id) {
                                    await msg.channel.createMessage(require(`./ticket_jsons/${i.data.custom_id.replace("order_bot_ticket", "bot.js").replace("support_ticket", "support.js").replace("partner_ticket", "partner.js")}`)());
                           }
                  });
         });
}