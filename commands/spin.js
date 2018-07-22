const Discord = require("discord.js");
const moment = require('moment');
const cooldown = new Set();

exports.run = async (bot, message, args) => {
  if (cooldown.has(message.author.id && message.guild.id)) {
      return message.channel.send('**[COOLDOWN]:** Poti folosi aceasta comanda dupa 5 minute!');
  }
  cooldown.add(message.author.id && message.guild.id);
  setTimeout(() => {
      cooldown.delete(message.author.id && message.guild.id);
  }, 300000);
  let replies = [
    `**[  :slot_machine: l SPIN ]**
------------------
:melon: : :cherries: : :pear:

:grapes: : :grapes: : :pear: **<**

:banana: : :banana: : :melon:
------------------
**| : : : : LOST : : : : |**`,

`**[  :slot_machine: l SPIN ]**
------------------
:pear: : :cherries: : :pear:

:grapes: : :banana: : :pear: **<**

:banana: : :banana: : :melon:
------------------
**| : : : : LOST : : : : |**`,

`**[  :slot_machine: l SPIN ]**
------------------
:pear: : :cherries: : :pear:

:grapes: : :grapes: : :pear: **<**

:banana: : :banana: : :pear:
------------------
**| : : : : LOST : : : : |**`,

`**[  :slot_machine: l SPIN ]**
------------------
:pear: : :pear: : :pear:

:grapes: : :banana: : :cherries: **<**

:banana: : :banana: : :banana:
------------------
**| : : : : LOST : : : : |**`,

`**[  :slot_machine: l SPIN ]**
------------------
:apple: : :pear: : :banana:

:grapes: : :grapes: : :grapes: **<**

:cherries: : :pear: : :pear:
------------------
**| : : : : WIN : : : : |**`,

`**[  :slot_machine: l SPIN ]**
------------------
:apple: : :pear: : :banana:

:apple: : :apple: : :apple: **<**

:cherries: : :melon: :apple:
------------------
**| : : : : WIN : : : : |**`,

`**[  :slot_machine: l SPIN ]**
------------------
:banana: : :pear: : :pear:

:grapes: : :cherries: : :cherries: **<**

:banana: : :banana: : :melon:
------------------
**| : : : : LOST : : : : |**`,
  ];

  let result = Math.floor((Math.random() * replies.length));

  message.channel.send(replies[result]);
}

exports.help = {
  name: "spin"
};
