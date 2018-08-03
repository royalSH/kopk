const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**EROARE: Nu ai acces la aceasta comanda!**");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send("**EROARE: N-am gasit acest user**");
    if (tomute.hasPermission("ADMINISTRATOR")) return message.channel.send("**EROARE: Nu poti folosii aceasta comanda pe un grad superior!**");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.channel.send("**EROARE: N-ai specificat timpul!**");

    await (tomute.addRole(muterole.id));
    message.channel.send(`**<@${tomute.id}> a primit gag de la ${message.author} pentru ${ms(ms(mutetime))}**`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`**<@${tomute.id}> a primit ungag!**`);
    }, ms(mutetime));

}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "gag",
    description: 'Denies the user from speaking for the time provided.',
    usage: 'gag [time: hours, minitues, or days.]'
}