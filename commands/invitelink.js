const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("INVITE CODE: discord.me/hinami")
    .setFooter(`Hinami | Official Server |`, bot.user.displayAvatarURL)
    .setColor("#15f153")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"invitelink"
}
