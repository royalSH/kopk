const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '291270997049344001') return message.channel.send("Nu te-am vazut in viata mea, cum sa-mi fi tu sora?");
    let coin = ['https://i.imgur.com/UqahYjh.png', 'https://i.imgur.com/cUUDzd6.png']
let flip = Math.floor((Math.random() * coin.length));
let coinembed = new Discord.RichEmbed()
.setTitle("tu esti sora mea mai mare si scumpa :kissing_heart: :relaxed: :heart_eyes:")
.setAuthor(message.author.tag, message.author.avatarURL)
.setImage(coin[flip])
message.channel.send(coinembed)
}

module.exports.help = {
    name: "sister",
    description: "my sister"
}
