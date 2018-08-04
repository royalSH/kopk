const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let replies = [
    `Chiar dacă am să pierd acest sentiment , sunt sigur că mă voi îndrăgosti de tine din nou și din nou. – Syaoran Li (Cardcaptor Sakura)
    `,

    `Vreau să schimb lucruri. Vreau să cred că orice poate fi schimbat. Din momentul în care te-am întâlnit, o nouă lume s-a deschis în fața mea. Vezi tu, după ce am rătăcit atât timp în întuneric, o lumină mi-a adus fericirea. Și asta doar datorită ție. Chrono – (Chrono Crusade)`,

    `Dacă iubești pe cineva, acesta te poate întrista. Acesta te poate face să te simți singur, uneori. Dar acel cineva te poate face de-asemenea mai fericit decât ai putea fi vreodată. (Fruit Basket)`,

    `Dintre toate zilele pe care le-am trăit , doar cele pe care le-am petrecut cu tine păreau reale. (Vincent Volaju)`,

    `Iți ordon să mă iubești ! Euphemia Li Brittania (Code Geass)`,

    `Dacă aș putea să fiu lângă tine atunci când lumea s-ar sfârși , ar fi suficient pentru mine. Blue (Wolf’s Rain)`,

    `În acea zi mi-ai spus că solitudinea este durere! Am înțeles asta atât de bine în acest moment. Am familie, prieteni dar dacă tu ai pleca…pentru mine…va fi la fel ca și cum aș fi singur. – Haruno Sakura ( Naruto )`,

    `După toate , … Iubirea este despre sincronizare.  Dacă nu spui ce trebuie la momentul potrivit , nu contează cât de mult timp ai investit în acea relație , totul se va ruina. Chiar dacă la un moment dat regreți, va fi prea târziu. Takeuchi Masafumin (Bokura ga Ita – We were there)`,

    `Dar noi am fost mereu împreună , și mi-ar fi plăcut să rămânem așa pentru totdeauna. (Shugo Chara!)`,

    `Mamă, oamenii spun că iubirea face o fată să fie frumoasă, asta înseamnă că va fi urâtă pentru totdeauna dacă niciodată nu va iubi pe cineva? (Kuragehime)`,

    `Nu contează cât de departe vei zbura, întotdeauna vei rămâne cea mai prețuită persoană din viața mea. (Vampire Knight)`,

    `Iubesc acest joc pe care oamenii îl numesc viață, din adâncul sufletului meu. Shogo Makishima (Psycho-Pass)`,

    `Opusul dragostei nu este ura ci indiferența. Kyoko Hoin (Kodomo no Jikan) `,

    `Multe lucruri se schimbă cu trecerea timpului. Dar sunt și lucruri care niciodată nu se schimbă. Lucruri care sunt prețioase pentru că se schimbă , și lucruri care sunt preţioase tocmai pentru că nu se schimbă. Ambele sunt prețioase. Nu simți și tu la fel ? Mizunashi Akari (Aria the Animation)`,

    `Voi fi mereu lângă tine, chiar și atunci când asta înseamnă să încalc regulile raiului. Taka Sukunami (Fushigi Yugi)`,

    `Să știi ceea ce este drept și totuși să alegi să ignori este un act al lașității. Hatake Kakashi (Naruto)`,

    `Poate nu mă crezi , chiar înainte să-mi spună numele său , am simțit ca și cum deja îl cunoșteam. Takahashi Nanami (Bokura ga Ita, ENG – We Were There)`,

    `Râzi atunci când e vorba de iubire, dar iubirea te va face să plângi. Yasushi Takagi, a.k.a Yasu (Nana)`,

    `Nu contează cât de mult timp a trecut. Când pierzi pe cineva pe care l-ai iubit, niciodată nu-l vei uita. Niciodată nu vei trece peste singurătate. Ghost Woman`,

    `,,Bună, elevi, îmi cer scuze c-am întârziat, m-am pierdut pe drumul vieții” —Kakashi Hatake (Naruto)`
  ];

  let sursa = ['loveisaname.com']
  let autor = ['Daniliuc Marcel']
  let developer = ['HinamiDEV']

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Source:", sursa, true)
  .addField("Post Author:", autor, true)
  .addField("Distribuited:", developer, true)
 // .addField("CITAT ANIME:", replies[result], true)
  .setDescription(replies[result])
  .setFooter("Hinami | Anime Quote Command | paypal.me/hinamisrl", bot.user.displayAvatarURL)

  message.channel.send(ballembed);
}

exports.help = {
  name: "citate"
};