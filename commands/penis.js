const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("**:exclamation: | Comanda poate fi executata doar intr-un channel NSFW**");
    let topenis = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!topenis) return message.channel.send("**EROARE: Ceva nu a mers bine..**");

    let penis = [
        "8==> (2cm)",
        "8======> (6cm)",
        "8=================> (17cm)",
        "8======================> (22cm)",
        "8=====> (5cm)",
        "8===> (3cm)",
        "8==========> (10cm)",
        "8=======> (7cm)",
        "8========> (8cm)",
        "8=========> (9cm)",
    ]
    let pr = Math.floor((Math.random() * penis.length));
        message.channel.send(`**${message.mentions.members.first().user.username} are ${penis[pr]}**`)
}

module.exports.help = {
    name: "penis"
}
