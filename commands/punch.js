const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kiss = [
      "https://i.imgur.com/jiCoh51.gif", // edited 13
      "https://i.imgur.com/jgWTg2c.gif", // edited 12
      "https://i.imgur.com/xka4Wzq.gif",
      "https://i.imgur.com/dAjk9C0.gif",
      "https://i.imgur.com/mUhj2Bb.gif",
      "https://i.imgur.com/0ZGQbh9.gif",
    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} dai in tine ca surdu-n clopot...`)
            .setImage('https://media.giphy.com/media/Yk4xEy30oy3nyaaRsQ/giphy.gif')
            .setFooter(`Hinami | Punch Command v1.0 |`, bot.user.displayAvatarURL)
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} ii da un pumn lui: ${message.mentions.members.first().user.username}`)
            .setImage(kiss[hugresult])
            .setFooter(`Hinami | Punch Command v1.0 |`, bot.user.displayAvatarURL)
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(`${message.author.username} isi da cu bata-n cap... csf... n-ai csf..`)
        .setImage('https://media.giphy.com/media/Yk4xEy30oy3nyaaRsQ/giphy.gif')
        .setFooter(`Hinami | Punch Command v1.0 |`, bot.user.displayAvatarURL)
    message.channel.send({
        embed: ghembed
    })
}

module.exports.help = {
  name:"punch"
}
