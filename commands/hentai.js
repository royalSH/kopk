const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  let hi = [
    "https://images-ext-2.discordapp.net/external/8gMfiYjDUg3xzNJdZyHUFgALh0lXASmuFM4R4Ux2xM0/https/78.media.tumblr.com/1a1f20ca7fad2b3c3a7b49f78baae7c3/tumblr_mw0qolRPd41sflbiso1_500.gif",
    "https://78.media.tumblr.com/5c978a3ed2ac3018e32925896d9ae8f5/tumblr_myozk4PmmG1sflbiso1_500.gif",
    "https://i.pinimg.com/originals/2c/97/d1/2c97d161c2e9b6586347964f5adca228.gif",
    "https://i.imgur.com/w5u2kLd.gif",
    "http://78.media.tumblr.com/350d7cda02469c68ea960c1cdb05e99b/tumblr_ob1kxdbtsk1vzttmyo1_500.gif",
    "https://78.media.tumblr.com/931125762652e49075f26f954049c0da/tumblr_msvseafYc01sflbiso1_1280.gif",
    "https://78.media.tumblr.com/fa2ec47fb623672ab829f19f8b570d69/tumblr_myoxrjJcOv1sflbiso1_500.gif",
    "https://68.media.tumblr.com/37320d7ba87cc087713cd5f42ceff0fa/tumblr_ok06xwuKen1v2hfg0o1_500.gif",
    "https://static.hentai-image.com/upload/20141210/1/235/266.gif",
    "https://78.media.tumblr.com/8a641a035960bcd73d68d47476e468f4/tumblr_mw06kcu11Q1sg6uevo1_500.gif",
    "http://66.media.tumblr.com/8e18b872a17e2aa7807c57c1fdf32b43/tumblr_nm1nl5TY1w1tv5c1wo1_400.gif",
    "http://78.media.tumblr.com/116aacf36b211b12cf5856b9e21b96cb/tumblr_mi7zb9hHZ41rm0ncgo1_1280.gif",
    "http://ahegao.online/wp-content/uploads/2016/07/tumblr_oa8deoSDmz1vzttmyo1_500.gif",
    "https://images-ext-1.discordapp.net/external/K5YB_czOgV6TQ3_G5QEKqYlkeR9vMjChqRL3KuyBR-Q/http/67.media.tumblr.com/45e7984ad999a1158377bec7c7236aeb/tumblr_nm1nl5TY1w1tv5c1wo3_1280.gif"
  ]
  let r = Math.floor((Math.random() * hi.length));
    if (!message.channel.nsfw) return message.channel.send("**:exclamation: | Comanda poate fi executata doar intr-un channel NSFW**");

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Poftim Onii-Chan :peach:")
    .setImage(hi[r])
    .setColor("RANDOM")
    .setFooter(`Hinami | Hentai Command v0.3 | paypal.me/hinamisrl`, bot.user.displayAvatarURL);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "hentai"
}
