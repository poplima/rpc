const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
require('dotenv').config();

const client = new Client();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  client.user.setActivity("Lo-Fi Beats", { type: "LISTENING" });
});

client.login(process.env.TOKEN);
