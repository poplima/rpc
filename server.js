const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Selfbot Rich Presence is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
