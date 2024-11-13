export const config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  path: "/wd/hub",

  specs: ["./test/specs/**/*.js"],

  maxInstances: 10,

  capabilities: [
    {
      platformName: "iOS",
      "appium:app": "storage:filename=LojaEBAC.ipa",
      "appium:deviceName": "iPhone XR",
      "appium:platformVersion": "16.7",
      "appium:disableIdLocatorAutocompletion": true,
      "appium:automationName": "XCUITest",
      "sauce:options": {
        build: "appium-build-teste-ebacshop-ios",
        name: "Ebac Shop Teste",
        deviceOrientation: "PORTRAIT",
        appiumVersion: "stable",
      },
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
