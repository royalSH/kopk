const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("**:exclamation: | Comanda poate fi executata doar intr-un channel NSFW**");
    let torape = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!torape) return message.channel.send("**EROARE: Ceva nu a mers bine..**");
    let kiss = [
      "https://images-ext-2.discordapp.net/external/DHgnME9kYjzX7mj-8pA3ZLB1j092JMnNcbvJOAPWgwk/https/hentaivibe.ro/api/rape5.gif",
      "https://images-ext-1.discordapp.net/external/pKlalEGYfS8vdMWeaauw4v7B_7RIVhGogMNUjl_by4A/https/hentaivibe.ro/api/rape2.gif",
      "https://images-ext-2.discordapp.net/external/vhoGPJuTCnSTqCur2mTtWZdCyR-Q_ldn9E-ouaJPP-4/https/hentaivibe.ro/api/rape11.gif",
      "https://images-ext-1.discordapp.net/external/Pjocf7ZrN0Ryc_kEpn_6b-aHYbsl0TkvIsUsN7IVhfI/https/hentaivibe.ro/api/rape12.gif",
      "https://images-ext-1.discordapp.net/external/B6lwxc8fZnUlCenuiMkmORtG8rIPUafWFWU_EyeLNl0/https/hentaivibe.ro/api/rape10.gif"
    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} il/o violeaza pe: ${message.mentions.members.first().user.username}`)
            .setImage(kiss[hugresult])
            .setFooter(`Hinami | Rape Command  v1.5 |`, bot.user.displayAvatarURL)
        message.channel.send(hembed)
        return;
    }
}

module.exports.help = {
  name:"rape"
}
