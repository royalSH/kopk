const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let replies = [
    `O doamna intra intr-un magazin de arme.
– Dati-mi, va rog, un Beretta, calibrul 45.
Vanzatorul:
– Pentru aparare?
– Nu, pentru aparare mi-am angajat un avocat!`,

    `– Sunt de zece zile in Tulcea si regret ca nu am venit din prima zi in restaurantul dumneavoastra.
– Multumim, domnule, ne maguliti.
– Nu, vreau sa spun ca as fi preferat sa mananc stiuca asta acum zece zile.`,

`Cand vrei sa te arunci pentru o femeie de pe bloc, aminteste-ti ca n-ai aripi, ci coarne.`,

    `– Sunt de zece zile in Tulcea si regret ca nu am venit din prima zi in restaurantul dumneavoastra.
– Multumim, domnule, ne maguliti.
– Nu, vreau sa spun ca as fi preferat sa mananc stiuca asta acum zece zile.`,

    `O pisica hipioata trecea strada. O batranica o vede si striga dupa ea:
– Pis, pis, pis…
La care pisica raspunde, ridicand doua degete:
– Peace, maica, peace!`,

    `Pasagerul unui avion marturiseste:
– Imi vine asa sa vomit!
La care stewardesa prompta:
– Va aduc intr-o secunda o punga!
– Dar de ce? Credeti ca vreau sa iau chestia asta acasa?`,

    `Trei detinuti urmeaza sa fie trimisi pe o insula pustie unde sa isi ispasească pedepsele. Gardianul le spune ca au voie sa duca cu ei un singur obiect si ii intreaba ce ar dori.
Primul spune: Pai, eu o sa iau niste creioane colorate si toata ziua o sa am de desenat pe peretii puscariei.
Al doilea zice: Pai, eu o sa imi iau un pachet de carti de joc si toata ziua o sa joc carti cu ceilalti detinuti.
Iar al treilea: Pai, eu zic sa iau o cutie de tampoane, ca am citit ca cu un tampon din ala poti sa si inoti si sa te cateri in copaci si sa calaresti, asa ca toata ziua o sa am ce sa fac cu ele!`,

    `Doi ciobani merg la un restaurant mediteranean. Dupa ce citesc meniul il intreaba pe chelner:
– Dom’le draga, ce is acelea fructe de mare?
– Caracatita, calamar, rac, creveti, raspunde chelnerul.
– Apoi bag de seama, zice unul dintre ciobani, dupa cum zici dumneata, vulpea, ursul si lupu’ is fructe de padure!`,

    `Un betiv mergea pe sapte carari spre casa. La un moment dat, il vede pe unul care inchidea un robinet. Se duce suparat spre el si-i zice:
– Tu invarteai, ba, strada?!`

  ];

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Poftim Onii-Chan :love_letter:")
  .addField("BANC", replies[result])
  .setFooter("Hinami | Banc API | paypal.me/hinamisrl", bot.user.displayAvatarURL)

  message.channel.send(ballembed);
}

exports.help = {
  name: "banc"
};
