const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let coin = ['l-ai scapat jos.. si nu s-a mai invartit..', '5 minute si 20 de secunde', '1 minut si 10 secunde', '6 minute si 31 de secunde', '2 minute', '5 minute', '8 minute si 52 de secunde', '3 minute', '2 minute si 12 secunde', '10 minute']

let flip = Math.floor((Math.random() * coin.length));
let coinembed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setTitle(`${message.author.username} a invartit spinner-ul pentru:`)
.setDescription(coin[flip])
.setFooter(`Hinami | Spinner Command v0.2 | `, bot.user.displayAvatarURL)
.setImage("https://loading.io/spinners/fidget-spinner/lg.fidget-spinner.gif")
message.channel.send(coinembed)
}

module.exports.help = {
    name: "spinner",
    description: "spinners"
}
