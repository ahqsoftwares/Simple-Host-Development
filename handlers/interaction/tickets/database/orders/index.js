let type = {};
let otherData = {};
let msg = {};
module.exports = {
         set: function(id, value) {
                  type[id] = value;
         },
         get: function(id) {
                  return type[id];
         },
         setD: function(id, value) {
                  otherData[id] = value;
         },
         getD: function(id) {
                  return otherData[id];
         },
         setE: function(id, value) {
                  msg[id] = value;
         },
         getE: function(id) {
                  return msg[id];
         }
}