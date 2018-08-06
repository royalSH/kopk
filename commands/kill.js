const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let tokill = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tokill) return message.channel.send("**EROARE: Ceva nu a mers bine..**");
    let kiss = [
      "https://images-ext-2.discordapp.net/external/gfLJ956epG_Ioam5_slKegIVUCSD1eGZ_sLkAdjBHAw/https/pa1.narvii.com/6129/1bbceff91d5e238546c650b73685e3b5f9099735_hq.gif",
      "https://images-ext-2.discordapp.net/external/R4c-Tso7rfHKMoh6-peAi7oI9TW_SeyA8P0ze-VLzxY/https/49.media.tumblr.com/b6e35a3a7e1c2c1c31ab32c3459332a3/tumblr_o0lbjtC84K1qimk8ao2_r1_540.gif",
      "https://images-ext-2.discordapp.net/external/gDtOY7W-GW9oAEJCxRli9Brz-LDvt_7wrK3iZYuz39o/https/i.pinimg.com/originals/ea/d6/f8/ead6f854a51bdbb84214fbee4047b2cf.gif"
    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} are o cadere nervoasa si il/o ucide pe: ${message.mentions.members.first().user.username}`)
            .setImage(kiss[hugresult])
            .setFooter(`Hinami | Kill Command  v1.5 |`, bot.user.displayAvatarURL)
        message.channel.send(hembed)
        return;
    }
}

module.exports.help = {
  name:"kill"
}
