const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("Super Mario", {type: "PLAYING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on('message', msg => {
  if (msg.content === 'hina?') {
    msg.channel.send('da?');
  }

  if (msg.content === 'hinami?') {
    msg.channel.send('da?');
  }
  if (msg.content === 'hinami este proasta') {
    msg.channel.send('Proasta ii ma-ta aia ca da mancare unui dobitoc.');
    msg.channel.send('Numai zic de cretin ca asta stie deja..')
  }
  if (msg.content === 'sugi pula') {
    msg.channel.send('Nu vreau sa-ti fur slujba..');
    msg.channel.send('Cand am vazut ca te descurci asa bine..')
    msg.channel.send('Mi-a fost mila sa te intrerup :-(')
  }
  if (msg.content === 'hina rules') {
    msg.channel.send('Bun.. incepem cu ce-i usor..');
    msg.channel.send('Injuraturile nu-s permise..')
    msg.channel.send('Trebuie sa respecti fiecare channel/categorie dupa server.')
    msg.channel.send('comenzile mele sunt facute pe cat posibil sa fie simple.')
    msg.channel.send('fiecare update va fi instiintat pe serverul oficial.')
    msg.channel.send('in fiecare saptamana se schimba playing stats in functie de castigator, mai multe pe serverul oficial Hinami. [/invitelink]')
    msg.channel.send('sunt programata sa fiu mai mult folositoare pe partea administrativa.')
    msg.channel.send('**Am incheiat :D**')
  }
  if (msg.content === 'hina') {
    msg.channel.send('nu-ti raspund.');
  }
  if (msg.content === 'hina ma iubesti?') {
    msg.channel.send('Da Onii-Chan :*');
  }
  if (msg.content === 'cf hina?') {
    msg.channel.send('Bine... tu?')
  }
  if (msg.content === 'tigani') {
    msg.channel.send('Pe rug cu iei ca in Game Of Thrones!!!!')
  }
  if (msg.content === 'ce faci hina?') {
    msg.channel.send('dau muie la curiosi :kissing_heart:')
  }
  if (msg.content === 'te iubesc hina') {
    msg.channel.send('si eu te iubesc :kissing_heart:')
  }
  if (msg.content === 'vreau admin') {
    msg.channel.send('da o muie nu vrei tu?')
  }
  if (msg.content === '<@337854135976198144>') {
    msg.channel.send('nu-l mai striga ca oricum nu vine..')
    msg.channel.send('asta inseamna sa fi developer :grimacing:')
  }
  if (msg.content === 'pai') {
    msg.channel.send('niciun pai!! :rage:');
  }
  if (msg.content === 'salut') {
    msg.channel.send('salut si tie :)')
  }
    if(msg.content.startsWith("<@337854135976198144>")) {
    msg.channel.send('Monstrul Dix isi va face aparitia imediat')
    let dix1 = new Discord.RichEmbed()
    .setImage("https://media.giphy.com/media/kHsoCp0XGwQec/giphy.gif")
    msg.channel.send(dix1)
    msg.channel.send('Trebuie sa fug de aici !!!')
    let dix2 = new Discord.RichEmbed()
    .setImage("https://media.giphy.com/media/f4V2mqvv0wT9m/giphy.gif")
    msg.channel.send(dix2)
  }
  if(msg.content.startsWith("<@456405756405743627>")) {
    msg.channel.send('da, ce este?')
  }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(botconfig.token);
