let db = {};
function set(id) {
         let char1 = Math.round(Math.random() * 60);
         let char2 = Math.round(Math.random() * 120);
         db[id]  = char1 + char2;
         return `Whats ${char1} + ${char2}`
}
module.exports = {
         set: function(id) {
                  return set(id);
         },
         validate: function(id, value) {
                  return db[id] == value;
         }
}