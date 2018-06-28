const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kiss = [
      "https://media1.tenor.com/images/747dbcd74f20a578c2461e944fef870d/tenor.gif?itemid=12011038", // edited 13
      "https://media1.tenor.com/images/53e828d6312bb1101a9556f4cda19739/tenor.gif?itemid=5085407", // edited 12
      "https://media1.tenor.com/images/356f5b06ce6bdb2c46a8c9c2685e18eb/tenor.gif?itemid=4797281", // edited 11
      "https://media1.tenor.com/images/fdaaa5ae17de7fab7f90beae1bdcf002/tenor.gif?itemid=10356312", // edited 10
      "https://media1.tenor.com/images/5654c7b35e067553e99bb996535c0a75/tenor.gif?itemid=10358833", // edited 9
      "https://media1.tenor.com/images/5cf6c2fef93911111538d837ec71c24c/tenor.gif?itemid=5448064", // edited 8
      "http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-11.gif", // verificat
      "https://i.imgur.com/eisk88U.gif", // verificat
      "https://i.pinimg.com/originals/42/c3/85/42c3851fc31dc3434dfe5fa7e3463f1d.gif",
      "https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409", // edited 7
      "https://media1.tenor.com/images/e4fcb11bc3f6585ecc70276cc325aa1c/tenor.gif?itemid=7386341", // edited 6
      "https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif?itemid=10356314", // edited 5
      "https://media1.tenor.com/images/e76e640bbbd4161345f551bb42e6eb13/tenor.gif?itemid=4829336", // edited 4
      "https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722", // edited 3
      "https://media1.tenor.com/images/daf7b144c7caceee3d90dca791a4c790/tenor.gif?itemid=7572438", // edited 2
      "https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649", // edited 1

    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} se saruta singur.. ce ciudat e omul asta..`)
            .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
            .setFooter(`Hinami | Kiss System  v3.1 |`, bot.user.displayAvatarURL)
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} il/o saruta pe: ${message.mentions.members.first().user.username}`)
            .setImage(kiss[hugresult])
            .setFooter(`Hinami | Kiss System  v3.1 |`, bot.user.displayAvatarURL)
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(`${message.author.username} se saruta singur (wtf...)`)
        .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
        .setFooter(`Hinami | Kiss System  v3.1 |`, bot.user.displayAvatarURL)
    message.channel.send({
        embed: ghembed
    })
}

module.exports.help = {
  name:"kiss"
}
