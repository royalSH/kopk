const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  let Junimea = ['Junimea']
  let Upload = ['HinamiDEV']

  let hi = [
    "https://i.imgur.com/qfcFfJU.png",

    "https://i.imgur.com/sJNRZdA.png",

    "https://i.imgur.com/1TjSitp.png",

    "https://i.imgur.com/jtbWUkS.png",

    "https://i.imgur.com/CopshW0.png",

    "https://i.imgur.com/QAh8Cib.png",

    "https://i.imgur.com/qXRtPAq.png",

    "https://i.imgur.com/yDgwCJZ.png",

    "https://i.imgur.com/HzFTZ0G.png",

    "https://i.imgur.com/PULtnjr.png",

    "https://i.imgur.com/KMnUW5W.png",

    "https://i.imgur.com/4PSzYGt.png",

    "https://i.imgur.com/IOqMwbi.png",

    "https://i.imgur.com/SHD0B2R.png",

    "https://i.imgur.com/iGABzgr.png",

    "https://i.imgur.com/wbPjDYY.png",
  ]
  let r = Math.floor((Math.random() * hi.length));

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Poftim un meme Onii-Chan! 😂")
    .setImage(hi[r])
    .setColor("RANDOM")
    .addField("Credits:", `${Junimea}`, true)
    .addField("Upload:", `${Upload}`, true)
    .setFooter(`Hinami | Meme Command v0.3 |`, bot.user.displayAvatarURL);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "meme"
}