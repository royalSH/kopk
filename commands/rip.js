
const { Client, Attachment } = require('discord.js');
const client = new Client();

module.exports.run = async (bot, message, args) => {
    const rip = new Attachment('http://gifimage.net/wp-content/uploads/2017/10/dead-anime-gif-1.gif');
    message.channel.send(`**${message.author.username} tocmai a murit! ☠**`)

    message.channel.send(rip);
}

module.exports.help = {
    name: "rip"
}