const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let fondator = ['Dix']
  let cofondator = ['sιოσηα']
  let betatester = ['Koral']
  let premium = [`TheLopata
  CodyStorm123
  sιოσηα
  Dix`]

  let ballembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Owner", fondator, true)
  .addField("Co-Owner", cofondator, true)
  .addField("Premium", premium, true)
  .addField("Tester", betatester, true)
  .setThumbnail(bot.user.displayAvatarURL)
  .setFooter("Hinami | Staff Command | paypal.me/hinamisrl", bot.user.displayAvatarURL)

  message.channel.send(ballembed);
}

exports.help = {
  name: "staff"
};