import type { Options } from '@wdio/types';
import allure from "@wdio/allure-reporter";

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    port: 4728,

    specs: [
        './features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [
    
        {
            // Capabilities for native mobile app tests on iOS
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 15', // Your device name
            "appium:autoAcceptAlerts": true, // Alerts
            'appium:platformVersion': '17.2', // Your iOS version
            'appium:udid': '00008120-00162C320238A01E', // Replace with your device UDID
            'appium:automationName': 'XCUITest',
            //"appium:noReset": true,
            'appium:app': 'app/AzulNativeApp.ipa' // Path to your iOS app
            
        },
      
    ],

    logLevel: 'debug',

    bail: 1,

    waitforTimeout: 10000,

    connectionRetryTimeout: 1220000,

    connectionRetryCount: 1,

    services: ['appium'],

    framework: 'cucumber',

    afterStep: async function () {
        allure.addAttachment(
          `Screenshot`,
          Buffer.from(await driver.takeScreenshot(), "base64"),
          "image/png"
        );
      },

    reporters:
    [
        [ 
        'allure',
        {
          outputDir: "allure-results",
          disableWebdriverStepsReporting: true, // Disable WebDriver steps reporting
          disableWebdriverScreenshotsReporting: true,
          useCucumberStepReporter: true,
        },
      ],
    ],
    
    

    cucumberOpts: {
        require: ["./features/**/*.ts"], // Update if needed,
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 600000,
        ignoreUndefinedDefinitions: false
    },
}
