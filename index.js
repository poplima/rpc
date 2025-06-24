const { Client } = require("discord.js-selfbot-v13");
require("dotenv").config();
require("./server");

const client = new Client();

client.on("ready", () => {
  console.log(`${client.user.username} is online.`);

  client.user.setActivity({
    name: "Lo-Fi Beats",
    type: "LISTENING", // or PLAYING, WATCHING, CUSTOM
    applicationId: process.env.APP_ID,
    assets: {
      largeImage: "lofi",        // name of your uploaded image asset
      largeText: "Lo-Fi Vibes",  // tooltip on hover
      smallImage: "headphones",  // optional
      smallText: "Chill Music",
    },
    buttons: [
      { label: "Listen Now", url: "https://www.youtube.com/watch?v=jfKfPfyJRdk" },
      { label: "Join Discord", url: "https://discord.gg/yourinvite" },
    ],
  });
});

client.login(process.env.TOKEN);
