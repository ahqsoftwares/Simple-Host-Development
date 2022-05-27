module.exports = function() {
         return {
                  content: "Want to partner with the server? Check the requirements!",
                  embeds: [{
                           title: "Requirements",
                           description: `These are the requirements for partnership:-
                           
1. Must have 200+ members!
2. Must have a partner category.
3. Must have to be a development based server!`,
color: require("../../colors").YELLOW
                  },{
                           title: "Partner!",
                           description: "Click the button below to apply for partnership!",
                           color: 0x57f287
                  }],
                  components: [{
                           type: 1,
                           components: [{
                                    type: 2,
                                    style: 3,
                                    label: "Apply!",
                                    emoji: {
                                             id: null,
                                             name: "☑️"
                                    },
                                    custom_id: "make_a_partner_ticket"
                           }]
                  }]
         }
}