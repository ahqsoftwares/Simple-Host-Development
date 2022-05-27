const {set} = require("./database");
module.exports = async function (i) {
         let result = set(i.member.user.id);
         await i.createModal({
                  "title": String(result),
                  "custom_id": "verify_modal",
                  "components": [{
                    "type": 1,
                    "components": [{
                      "type": 4,
                      "custom_id": "verify_field",
                      "label": "Answer",
                      "style": 1,
                      "min_length": 1,
                      "max_length": 5,
                      "placeholder": "20",
                      "required": true
                    }]
                  }]
         });
}