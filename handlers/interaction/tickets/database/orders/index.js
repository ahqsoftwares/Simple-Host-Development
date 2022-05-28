let type = {};
let otherData = {};
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
         }
}