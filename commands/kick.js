const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**EROARE: Nu ai acces la aceasta comanda!**");
    if(!args[0]) return message.channel.send("**/kick <user> <motiv>**");
    let toban = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!toban) return message.channel.send("**EROARE: N-am gasit acest user**");
    if (toban.hasPermission("KICK_MEMBERS")) return message.channel.send("**EROARE: Ceva n-a mers bine!**");
    let bReason = args.join(" ").slice(22);

    message.guild.member(toban).kick(bReason);
    message.channel.send(`**:x: | ${toban} a primit kick de la ${message.author.username} pentru motivul: ${bReason}**`);


}

module.exports.help = {
    name: "kick"
}