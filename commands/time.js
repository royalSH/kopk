const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setFooter(`Hinami | Time Command  v1.1 |`, bot.user.displayAvatarURL)
.addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
message.channel.send({ embed })
    message.react("🕐")
};

module.exports.help = {
  name: "time"
}
