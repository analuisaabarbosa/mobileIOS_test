import "dotenv/config";
import { sauceConf } from "./sauce.conf.js";
import { bsConf } from "./bs.conf.js";

function getConfig() {
  switch (process.env.ENVIRONMENT) {
    case "browserstack":
      return bsConf;
    case "saucelabs":
      return sauceConf;
  }
}

export const config = getConfig();
