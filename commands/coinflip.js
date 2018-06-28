const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let coin = ['https://i.imgur.com/2yz9E85.png', 'https://i.imgur.com/9ZqCI3i.png', 'https://i.imgur.com/fArmJCN.png']
let flip = Math.floor((Math.random() * coin.length));
let coinembed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setFooter(`Hinami | Coinflip System v0.3 |`, bot.user.displayAvatarURL)
.setImage(coin[flip])
message.channel.send(coinembed)
}

module.exports.help = {
    name: "coinflip",
    description: "Flips a coin!"
}
