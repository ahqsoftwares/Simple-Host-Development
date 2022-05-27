module.exports = async function (msg) {
         if (!msg.member.permissions.has("administrator")) return;
         await msg.channel.createMessage({
                  embeds: [
                           {
                                    title: ":warning: Server Rules :bookmark:",
                                    description: `We cannot list all the rules of the world so keep some common sense! Anyways here are the common rules :-

General Rules
:pushpin: No blank nicknames.
:pushpin: No inappropriate nicknames.
:pushpin: No sexually explicit nicknames.
:pushpin: No offensive nicknames.
:pushpin: No nicknames with unusual or unreadable Unicode.
:pushpin: No inappropriate profile pictures.
:pushpin: No sexually explicit profile pictures.
:pushpin: No offensive profile pictures.
:pushpin: Moderators reserve the right to change nicknames.
:pushpin: No exploiting loopholes in the rules (please report them).
:pushpin: No DMing other members of the server for scam or promotion.
:pushpin: No bugs, exploits, glitches, hacks, bugs, etc.
                                    
Text Channel Rules
:speech_balloon: No @mentioning the mods.
:speech_balloon: No asking to be granted roles/moderator roles.
:speech_balloon: Contact the staffs only in 💼・staff-support for any support/complaints.
:speech_balloon: No @mentioning spam.
:speech_balloon: No sexually explicit, NSFW, pornographic content.
:speech_balloon: No sexism.
:speech_balloon: No CAPS LOCK.
:speech_balloon: No overusing emojis, reactions ...
:speech_balloon: Moderators reserve the right to delete or edit any post.
:speech_balloon: No advertisement without permission.
:speech_balloon: No bot commands in text channels.
                                    
Voice Channel Rules
:loud_sound: No voice chat channel hopping.
:loud_sound: No annoying, loud or high pitch noises.
:loud_sound: Reduce the amount of background noise, if possible.
:loud_sound: Push to talk only.
:loud_sound: Head Moderators reserve the right to disconnect, mute, deafen, or move members to and from voice channels.
                                    
Bot Command Rules
:robot: No command spam.
:robot: No macros.
:robot: No hacks.
:robot: No adding/changing/removing commands.`,
                                    color: 0xed4245
                           }
                  ],
                  components: [
                           {
                                    type: 1,
                                    components: [
                                             {
                                                      type: 2,
                                                      style: 1,
                                                      label: "Verify me!",
                                                      custom_id: "verify_me",
                                                      emoji: {
                                                               id: null,
                                                               name: "☑️"
                                                      }
                                             }
                                    ]
                           }
                  ]
         });
}