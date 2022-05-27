module.exports.init = (Eris) => {
         const {loadPrototype} = require("../load.js");
         loadPrototype(Eris, "CommandInteraction", function createModal(data) {
                  return this._client.createInteractionResponse.call(this._client, this.id, this.token, {
                           type: 9,
                           data: data
                  }).then(() => this.update())
         }, true);
         loadPrototype(Eris, "ComponentInteraction", function createModal(data) {
                  return this._client.createInteractionResponse.call(this._client, this.id, this.token, {
                           type: 9,
                           data: data
                  }).then(() => this.update())
         }, true);
         loadPrototype(Eris, "UnknownInteraction", function createModal(data) {
                  return this._client.createInteractionResponse.call(this._client, this.id, this.token, {
                           type: 9,
                           data
                  }).then(() => this.update())
         }, true);
}