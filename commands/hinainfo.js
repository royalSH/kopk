const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setImage("https://i.imgur.com/McZp9re.png")
    .setFooter(`Hinami | Informations Command  v1.2 |`, bot.user.displayAvatarURL)
    .setColor("#15f153")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"hinainfo"
}
