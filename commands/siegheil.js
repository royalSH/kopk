const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let ballembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage("https://media.discordapp.net/attachments/443484328584806410/469505353898262530/hh.jpg")
  .setFooter("Hinami | Sieg heil Command! | ", bot.user.displayAvatarURL)

  message.channel.send(ballembed);
}

exports.help = {
  name: "siegheil"
};
