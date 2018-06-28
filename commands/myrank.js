const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setImage("https://i.imgur.com/HqXnlXC.png")
    .setColor("RAMDOM")
    .setAuthor(message.author.tag, message.author.avatarURL)

    message.channel.send(botembed);
}

module.exports.help = {
  name:"myrank",
}
