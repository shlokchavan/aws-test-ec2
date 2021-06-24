const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// Listener
app.listen(PORT, HOST, async () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

// Default
app.use("/", (req, res) => {
  res.send(`API is ready`);
});
