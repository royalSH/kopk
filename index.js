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

  bot.user.setActivity("PewDiePie", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on('message', msg => {
    if (msg.content === "hina" || msg.content === "hinami" || msg.content === "hina?" || msg.content === "hinami?") {
    let reply = ['da?', 'Normal nu ti-as raspunde... dar sunt programata s-o fac..', 'ai inebunit.. incepi sa vorbesti cu roboti :|', 'da, ce este?']
    let random = Math.floor((Math.random() * reply.length));
    msg.channel.send(reply[random])
  }
  if (msg.content === "dumnezeu" || msg.content === "Dumnezeu" || msg.content === "DUMNEZEU") {
  msg.channel.send("Este ocupat nepasandu-i de Africa, probabil te poate ajuta Luci.")
  }
  if (msg.content === 'tigani') {
    msg.channel.send('Pe rug cu iei ca in Game Of Thrones!!!!')
  }
  if (msg.content === 'pai') {
    msg.channel.send('niciun pai!! :rage:');
  }
  if (msg.content === 'a') {
    msg.channel.send('b');
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
    let reply = ['ce te intereseaza pe tine?', 'Nu vreau sa-ti raspund, pacat ca sunt programata sa o fac...', 'ai inebunit.. incepi sa vorbesti cu robotii dupa discord..', 'Bine, tu?', 'Bine ca sa nu fac rau..', 'Vorbesti ca un taran plouat, report!...', 'ma joc samp pe jade, tu?']
    let random = Math.floor((Math.random() * reply.length));
    msg.channel.send(reply[random])
  }
  if(msg.content.startsWith("samp")) {
    msg.channel.send("pe nephrite joci, nu?")
  }
  if(msg.content.startsWith("saluta fa!")) {
    if (msg.author.id !== '337854135976198144') return msg.channel.send("Nu raspund anonimilor..");
    msg.channel.send("s-s-s-salut :cry: :sleepy: :triumph:")
  }
     if(msg.content.startsWith("<@302489039301246976>")) {
    msg.channel.send('Lupul TheLopata isi va face aparitia imediat.. ai grija ca-ti mananca toate oile..')
    let lupu1 = new Discord.RichEmbed()
    .setImage("http://www.cunoastelumea.ro/wp-content/uploads/2015/11/lup-1-620x264.jpg")
    msg.channel.send(lupu1)
    msg.channel.send('Nu trebuia sa-l mentionezi.. acum mi-a furat toate oile si probabil ca le infuleca pe undeva..')
    let lupu2 = new Discord.RichEmbed()
    .setImage("https://3.bp.blogspot.com/-8INJkDz5tIo/V-bI-cPcOeI/AAAAAAAAFoI/fEBVt4_VAn4YfJVQuk_Howg4vdJlfgyvACLcB/w1200-h630-p-k-no-nu/lup-in-blana-de-oaie.jpg")
    msg.channel.send(lupu2)
  }
  if(msg.content.startsWith("#donate")) {
      let link = ['paypal.me/hinamisrl'];
      let warn = ['Ai grija la orice inselaciune, link-ul original este paypal.me/hinamisrl!'];
      let a1 = ['Orice donatie ne ajuta la inbunatatirea robotului si al hostului, evident primesti si anumite beneficii pentru ajutorul oferit!'];
      let a2 = ['Vei avea o comanda personala ce-ti va raspunde numai tie, vei primii o mentionare personalizata si bineinteles ca sugestia ta va fi pusa in considerare!']
      let a3 = ['Din pacate banii vor fi pierduti iar noi nu vom oferii nimic, este raspunderea dvs. pentru banii pierduti, noi nu oferim nicio garantie!'];
      let a4 = ['Bineinteles ca noi te vom adauga in blacklist-ul nostru deoarece este un gest prostesc si fara noima ce va da dureri de cap echipei deoarece pierdem timp in a face beneficiile pentru donatia falsa!'];
      let a5 = ['Beneficiile vor fi primite in cam 20 de minute(depinde de echipa), dar nu exista ca cineva care ne-a sustinut sa nu-si primeasca beneficiile'];
      let a6 = ['Deocamdata acceptam doar paypal si pin-uri de paysafecard.'];
      let a2_5 = ['Bineinteles, te vom rasplatii cu gradul de patron pentru donatia ta!'];
      let a7 = ['Banii stransi vor fi bagati intr-un dedicat mai performant si in achizitionarea a unor sisteme complexe distribuite de oameni profesionisti din strainatate!'];
      let a0 = ['Nu avem nicio limita de donatie, orice donatie este bine-venita!']

      let dix = ['Sunt foarte fericit c-am reusit s-o aduc pe Hinami la o versiune cat de cat stabila ce reuseste sa se mentina!'];
      let anom = ['Sunt la fel de fericit ca Developerul pentru c-am reusit sa ajut la dezvoltarea acestui robot de discord, probabil ca dupa terminarea ei, o voi adauga la serverul meu oficial!']

  let donate = new Discord.RichEmbed()
    .setTitle("DONATE COMMAND")
    .setDescription("Daca vrei sa vezi robotul in stadiul stabil ne poti sustine prin donatia ta(orice suma), noi iti vom oferii diferite beneficii pentru ajutorul acordat de tine!")
    .addField(`LINK:`, `${link}`)
    .addField(`:warning:ATENTIE!`, `${a1}`)
    .addField(`:diamond_shape_with_a_dot_inside:Ce primesc pentru donatia oferita?`, `${a2}`)
    .addField(`:diamond_shape_with_a_dot_inside:Cat trebuie sa donez?`, `${a0}`)
    .addField(`:diamond_shape_with_a_dot_inside:Voi avea grad pe serverul oficial pentru ca am donat?`, `${a2_5}`)
    .addField(`:diamond_shape_with_a_dot_inside:Ce se intampla daca am donat cui nu trebuie?`, `${a3}`)
    .addField(`:diamond_shape_with_a_dot_inside:Ce se intampla daca fac fake-donate?`, `${a4}`)
    .addField(`:diamond_shape_with_a_dot_inside:Ce se intampla daca donez si nu primesc beneficiile?`, `${a5}`)
    .addField(`:diamond_shape_with_a_dot_inside:Mai exista si alte metode de plata?`, `${a6}`)
    .addField(`:diamond_shape_with_a_dot_inside:Unde se duc banii stransi din donatii?`, `${a7}`)
    .setFooter("Hinami si-a inceput vanatoarea de patroni, daca vrei s-o sustii in acest traseu al dezvoltarii ii poti dona orice suma esti dispus/a sa ii dai.", bot.user.displayAvatarURL)

    msg.channel.send(donate)
  }
    if(msg.content.startsWith("heil")) {
    let hh = new Discord.RichEmbed()
    .setImage("https://images-ext-1.discordapp.net/external/ouGRYxdIh_dt043I_V5tuybbrCyXaHR9UGJvFZRg2ko/http/img.biaoqing.com/work/20171025/0013370170.gif")

    msg.channel.send(hh)
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
