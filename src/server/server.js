const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { PORT, PUBLIC_PATH = "public" } = options;
  const app = express();
  app.use(express.static(PUBLIC_PATH));
  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${PUBLIC_PATH}/index.html`
    );
    res.sendFile(indexPath);
    console.log(indexPath);
  });
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

module.exports = { startServer };
