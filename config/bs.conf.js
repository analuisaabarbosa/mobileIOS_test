import { generalConf } from "./general.conf.js";

export let bsConf = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone XR",
      "appium:platformVersion": "15",
      "appium:automationName": "XCUITest",
      "appium:app": "bs://e2aa2a938ac8b1732d3d5d17cafa50a5288e5bd3",
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      projectName: "BrowserStack EBAC",
      buildName: "browserstack build",
      sessionName: "BStack test IOS",
      //debug: true,
      // networkLogs: true,
    },
  },
  ...generalConf,
};
