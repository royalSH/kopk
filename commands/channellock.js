const ms = require('ms');

module.exports.run = async (client, message, args, tools) => {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('N-ai acces la aceasta comanda!')
          .then(msg => msg.delete({
              timeout: 10000
          }));
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'deblocheaza'];
    if (!time) return message.channel.send('Chiar asa greu e? /chlock <timp>');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
            })
            .then(() => {
                message.channel.send('**🔓| Channel-ul a fost deblocat!**');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            })
            .then(() => {
                message.channel.send(`**🔒| Channel-ul este blocat pentru** ${ms(ms(time), { long:true })}`)
                    .then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                    SEND_MESSAGES: null
                                })
                                .then(message.channel.send('**🔓| Channel-ul a fost deblocat**'))
                                .catch(console.error);
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
}

module.exports.help = {
  name: "chlock"
}
