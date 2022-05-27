module.exports = function() {
         return {
                  content: "Want support? Open a ticket to get support!\n**Warning :warning:**\nSpam tickets will be closed and might result in timeout!",
                  embeds: [{
                           title: "Support!",
                           description: "Click the button below to open a support ticket!",
                           color: 0x57f287
                  }],
                  components: [{
                           type: 1,
                           components: [{
                                    type: 2,
                                    style: 3,
                                    label: "Create Support Ticket",
                                    emoji: {
                                             id: null,
                                             name: "❓"
                                    },
                                    custom_id: "make_a_support_ticket"
                           }]
                  }]
         }
}