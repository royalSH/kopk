const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
    let tokill = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return message.channel.send("**⚠| Trebuie sa mentionezi pe cineva!**");
    if (!tokill) return message.channel.send("**⚠| EROARE: Ceva nu a mers bine..**");
    

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **${message.mentions.members.first().user.username} este ${gay}% gay!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};