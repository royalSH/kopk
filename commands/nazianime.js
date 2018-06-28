const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let coin = ['https://i.imgur.com/5lEvuhp.png', 'https://i.imgur.com/t2bKy3a.png', 'https://i.imgur.com/YZM3CdO.png', 'https://i.imgur.com/3sbOAeK.png', 'https://i.imgur.com/79Hjbur.png', 'https://i.imgur.com/eUHbQW7.png', 'https://i.imgur.com/goOtfU4.png']
let flip = Math.floor((Math.random() * coin.length));
let coinembed = new Discord.RichEmbed()
.setTitle("Poftim Onii-chan :D")
.setAuthor(message.author.tag, message.author.avatarURL)
.setImage(coin[flip])
message.channel.send(coinembed)
}

module.exports.help = {
    name: "nazism",
    description: "fete naziste"
}
