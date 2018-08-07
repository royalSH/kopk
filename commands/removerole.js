const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**⚠ | N-ai acces la aceasta comanda!**");
  if(!args[0]) return message.channel.send("**🚨 | /unsetrole <@user> <role>**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("**EROARE: Nu am gasit acest user**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**🚨 | Trebuie sa specifici rolul!**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**⚠ | N-am gasit acest rol!**");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("**🚨 | Nu are acest rol!**");
  await(rMember.removeRole(gRole.id));

  try{
    await message.channel.send(`**🚨 | ${message.mentions.members.first().user.username} a primit remove de la rolul de: ${gRole.name} | Comanda executata de ${message.author.username}**`)
  }catch(e){
    message.channel.send(`**🚨 | ${message.mentions.members.first().user.username} a primit remove de la rolul de: ${gRole.name} | Comanda executata de ${message.author.username}**`)
  }
}

module.exports.help = {
  name: "unsetrole"
}