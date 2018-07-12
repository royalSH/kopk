const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {
        message.channel.send("/avatar <@membru> ce-i asa de greu?");
        return;
    } else {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL; 
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) 
            .setColor("RANDOM") 
	    .setFooter(`Hinami | Avatar Command  v1.2 |`, bot.user.displayAvatarURL)
            .setImage(image) 
        message.channel.send(embed); 
    }
}

exports.help = {
  name: "avatar"
}
