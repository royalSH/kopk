const Discord = require('discord.js');
const quiz = [
  { q: "Cine se numeste sora vitrega a lui Eren?", a: ["mikasa", "Mikasa"] },
  { q: "Cum se numesc oamenii giganti din AOT?", a: ["titani", "Titani", "titan", "Titan"] },
  { q: "Cum se numea prima iubita a lui Kaneki?", a: ["Rize", "rize", "Kamishiro, Rize", "Kamishiro", "Rize Kamishiro", "rize kamishiro"] },
  { q: "Cum se numeste personajul principal din Tokyo Ghoul:re", a: ["Haise", "haise", "sasaki", "Sasaki Haise", "Haise Sasaki", "sasaki haise", "haise sasaki"] },
  { q: "Cum se numeste developer-ul meu? =]]", a: ["Dix", "dix", "dev-ul", "DEV-UL", "DEV-ul"] },
  { q: "Cum il cheama pe ghoul-ul kagune?", a: ["Noro", "noro"] },
  { q: "Cine a spart zidul din Attack on Titan?", a: ["Titanul Gigant", "titanul gigant", "Bertholdt", "bertholdt", "Hoover"] },
  { q: "Cine era titanul gigant din Attack on Titan?", a: ["Bertholdt", "bertholdt", "Bertholdt Hoover", "bertholdt hoover"] },
  { q: "Cine este unchiul lui Levi din Attack on titan?", a: ["Kenny", "kenny"] },
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Ai castigat: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Raspuns corect: \`${winnerMessage.content}\``)
                                 .setFooter(`Intrebare: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('N-ai raspuns la timp!')
                                 .setTitle(`Raspunsurile corecte erau: \`${item.a}\``)
                                 .setFooter(`Intrebare: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "quiz"
}