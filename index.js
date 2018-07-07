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

  bot.user.setActivity("Google Chrome", {type: "PLAYING"});

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
    msg.channel.send('e bine sa vrei..')
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
    if(msg.content.startsWith("<@291270997049344001>")) {
    msg.channel.send('Crezi ca ai fata sa o mentionezi pe Simona?')
    let sim1 = new Discord.RichEmbed()
    .setImage("https://media.giphy.com/media/l0HUhLksQED2GxsTC/giphy.gif")
    msg.channel.send(sim1)
  }
    if(msg.content.startsWith("ce faci fa?")) {
    let reply = ['ce te intereseaza pe tine?', 'Nu vreau sa-ti raspund, pacat ca sunt programata sa o fac...', 'ai inebunit.. incepi sa vorbesti cu robotii dupa discord..', 'bine, tu?', 'Bine ca sa nu fac rau..', 'Vorbesti ca un taran plouat, te rog da-i leave server...', 'ma joc samp pe jade, tu?']
    let random = Math.floor((Math.random() * reply.length));
    msg.channel.send(reply[random])
  }
  if(msg.content.startsWith("samp")) {
    msg.channel.send("pe nephrite joci, nu?")
  }
  if(msg.content.startsWith("saluta fa!")) {
    if (msg.author.id !== '291270997049344001') return msg.channel.send("Nu salut la comanda unui anonim, wtf..")
    msg.channel.send("s-s-s-salut :cry: :sleepy: :triumph:")
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
