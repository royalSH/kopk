const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let API = (client.ping).toFixed(2)
    let fps = ['60', '61', '62']
    let fpsr = Math.floor((Math.random() * fps.length));
    let rnumber = ['120', '1', '17', '53', '102', '109', '203', '1003', '501']
    let rrnumber = Math.floor((Math.random() * rnumber.length));

        let embed = new Discord.RichEmbed()
        .setColor(0xff2f2f)
        .setTitle(`:sleuth_or_spy::skin-tone-1:| Username: ${message.author.username}`)
        .addField("📶 PING:", `${API}ms`, true)
        .addField("💻 FPS:", fps[fpsr], true)
        .addField("✔ ID:", `${message.author.id}`, true)
        .addField("📏 ROL:", `${message.guild.role}`, true)
        .addField("🔍 Search:", `${message.author.tag}`, true)
        .addField("⚙ Tag:", `${message.author.discriminator}`, true)
        .addField("✔ Status:", `${message.author.presence.status}`, true)
        .addField("✔ Last Message:", `${message.author.lastMessage}`, true)
        .addField("✔ Random Number", rnumber[rrnumber], true)
        .addField("👔 Joined:", `${message.member.joinedAt}`)

        message.channel.send(embed);

}

exports.help = {
    name: 'stats'
}
