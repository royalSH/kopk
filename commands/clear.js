const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**:wastebasket: | Am sters ${args[0]} mesaje/mesaj!**`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}