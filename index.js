const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();

const client = new Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  client.user.setActivity("Lo-Fi Beats", { type: "LISTENING" });
});

client.login(process.env.TOKEN);
