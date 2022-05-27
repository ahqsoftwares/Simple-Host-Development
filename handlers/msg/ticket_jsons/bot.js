module.exports = function() {
         return {
                  content: "Want to order a bot? Create a ticket to order a bot!",
                  embeds: [{
                           title: "Order Bot!",
                           description: "Click the button below to order a bot!",
                           color: 0x57f287
                  }],
                  components: [{
                           type: 1,
                           components: [{
                                    type: 2,
                                    style: 3,
                                    label: "Order Bot!",
                                    emoji: {
                                             id: null,
                                             name: "🤖"
                                    },
                                    custom_id: "make_a_bot_order"
                           }]
                  }]
         }
}