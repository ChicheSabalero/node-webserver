const { envs } = require("./config/env");
const { startServer } = require("./server/server");

const main = () => {
  startServer({
    PORT: envs.PORT,
    PUBLIC_PATH: envs.PUBLIC_PATH,
  });
  console.log(envs);
  console.log(startServer);
};

(async () => {
  main();
})();
