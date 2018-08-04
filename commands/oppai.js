const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  let hi = [
    "https://media.discordapp.net/attachments/455732484387242025/475212573197729792/b3HxqJ3.gif",
    "https://media.discordapp.net/attachments/455732484387242025/475213069900054529/1484265448_1480272937_8c1f0b881469b3e480574c182e614ad9.gif",
    "https://media.discordapp.net/attachments/455732484387242025/475213566836867072/ZZVr1EN.gif",
    "https://media.discordapp.net/attachments/455732484387242025/475213822236295178/Jpfn8ec.gif",
    "https://media.discordapp.net/attachments/469117593551110145/475216232799404032/hinaerror.gif",
    "https://media.discordapp.net/attachments/455732484387242025/475214293625733122/hinamiop.gif",
    "https://media.discordapp.net/attachments/455732484387242025/475214526934024201/LrvqXIv.gif",
    "https://media.discordapp.net/attachments/455732484387242025/475214656625967104/5KqdP8v.gif",
    "https://media.discordapp.net/attachments/468754228991623189/475215036285976577/hinamiop15.gif?width=716&height=403",
    "https://media.discordapp.net/attachments/468754228991623189/475215049649029120/hinaoppai.gif",
    "https://media.discordapp.net/attachments/468754228991623189/475215050978885652/hinaop.gif"
  ]
  let r = Math.floor((Math.random() * hi.length));
    if (!message.channel.nsfw) return message.channel.send("**:exclamation: | Comanda poate fi executata doar intr-un channel NSFW**");

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Poftim Onii-Chan 🍑")
    .setImage(hi[r])
    .setColor("RANDOM")
    .setFooter(`Hinami | Oppai Command v0.3 | paypal.me/hinamisrl`, bot.user.displayAvatarURL);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "oppai"
}