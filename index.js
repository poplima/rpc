const RPC = require("discord-rpc");
require("dotenv").config();
require("./server"); // Keep-alive Express server

const clientId = process.env.APP_ID;
const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  console.log("RPC Ready");

  rpc.setActivity({
    details: "Listening to Lo-Fi Beats",
    state: "Chill vibes 🎧",
    startTimestamp: new Date(),
    largeImageKey: "lofi",        // Must match asset name uploaded on Discord dev portal
    largeImageText: "Lo-Fi Girl",
    smallImageKey: "headphones",  // Must match asset name uploaded on Discord dev portal
    smallImageText: "Now Playing",
    buttons: [
      { label: "Listen on YouTube", url: "https://youtube.com/lofi" },
      { label: "Join Discord", url: "https://discord.gg/yourserver" }
    ],
  });
  console.log("Rich Presence set!");
});

rpc.login({ clientId }).catch(console.error);
