const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let interviu = ["Ma bucur ca am reusit s-o aduc pe Hinami la o versiune superioara fata de alti roboti, in prezent ea se afla la versiunea 5.1!"]

  let ballembed = new Discord.RichEmbed()
  .setTitle("✔ | Acestea sunt comenzile mele in prezent:")
  .setColor("RANDOM")
  .setDescription(`
 1.!siegheil - o comanda pentru nazisti :D
 2.!spinner - invarti un spinner!
 3.!citate - iti da un citat random!
 4.!bigass - o comanda NSFW
 5.!hentai - o comanda NSFW
 6.!coinflip - dai cu banul daca te simti norocos!
 7.!stats - iti arata statusul tau!
 8.!banc - iti arata un banc random!
 9.!nazism - iti arata niste imagini cu personaje naziste!
 10.!time - iti arata ceasul!
 11.!staff - iti arata lista staff-ului!
 12.!report <membru> <descriere> - raportezi pe cineva de abuz s.a.m.d!
 13.!punch <membru> - dai un pumn unui membru dupa server!
 14.!kiss <membru> - saruti pe cineva dupa server!
 15.!hinainfo - iti arata informatii despre ea!
 16.!invitelink - iti arata un invitelink pentru a invita persoane pe server!
 17.!oppai - o comanda NSWF 
 18.!serverinfo - iti arata informatii despre server!
 19.!kill <membru> - omori pe cineva printr-un mention!
 20.!rape <membru> - Comanda NSFW!
 21.!slot - joci la pacanele!
 22.heil - comanda pentru naizisti.
 23.ce faci fa? - o intrebi pe hina ce face.
 24.#donate - comanda pentru donatii!
 25.!penis <membru> - Comanda NSFW!
  `)
  .addField("Developer", interviu)
  .setFooter("Hinami | Commands | paypal.me/hinamisrl", bot.user.displayAvatarURL)

  message.author.send(ballembed);
}

exports.help = {
  name: "cmds"
};
