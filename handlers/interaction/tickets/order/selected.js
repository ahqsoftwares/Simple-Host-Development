module.exports = async function(i) {
         await i.acknowledge();
         console.log(i.data.components);
}