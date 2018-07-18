const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.channel.send("Comanda poate fi executata doar intr-un channel NSFW");

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Poftim Onii-Chan :peach:")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter(`Hinami | Hentai Command v0.3 | paypal.me/hinamisrl`, bot.user.displayAvatarURL);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "hentai"
}
