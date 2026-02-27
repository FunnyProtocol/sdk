import app from "./src/app.js";
import config from "./src/config/index.js";

app.listen(config.port, () => {
  console.log(`${config.appName} running on port ${config.port}`);
});
