const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setImage("https://i.imgur.com/fILPfin.png")
    .setColor("#15f153")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"hinainfo"
}
