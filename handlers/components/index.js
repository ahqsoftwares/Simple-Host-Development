const { EventEmitter} = require("events");
class Collector extends EventEmitter {
         constructor (options) {
                  super(options);
                  this.options = options;

                  this.channel = options.channel;
                  this.client = options.channel.client;
                  this.filter = options.filter || function() {return true;}
                  this.timeout = options.timeout;
                  this.idle = options.idle;
                  this.startsAt = new Date(Date.now()).getMilliseconds();
                  this.last_seen = 0;
                  this.already = false;
                  this.run = false;

         }

         run() {
                  this.run = true;

                  this.client.on("interactionCreate", async(interaction) => {
                           if (((new Date(Date.now()).getMilliseconds() - this.startsAt) > this.timeout) && this.run == true) {
                                    if (!(this.already)) {
                                             this.emit("close");
                                             this.already = true;
                                    }
                                    return;
                           }
                           if ((!((this.last_seen - new Date(Date.now()).getMilliseconds()) < this.idle)) && this.run == true) {
                                    if (!(this.already)) {
                                             this.emit("close");
                                             this.already = true;
                                    }
                                    return;
                           }
                           if (this.filter(interaction) && this.run == true) {
                                    this.emit("collect", (interaction));
                                    this.last_seen = new Date(Date.now()).getMilliseconds();
                           }
                  });
         }

         stop() {
                  this.run = false;
                  this.already = true;
                  this.emit("close");
         }
}
module.exports = Collector;