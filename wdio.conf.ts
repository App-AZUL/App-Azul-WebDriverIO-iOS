import type { Options } from '@wdio/types'

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

    reporters: ["spec"],

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

    // Uncomment and implement any needed hooks

    // onPrepare: function (config, capabilities) {
    // },

    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },

    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },

    // beforeSession: function (config, capabilities, specs, cid) {
    // },

    // before: function (capabilities, specs) {
    // },

    // beforeCommand: function (commandName, args) {
    // },

    // beforeFeature: function (uri, feature) {
    // },

    // beforeScenario: function (world, context) {
    // },

    // beforeStep: function (step, scenario, context) {
    // },

    // afterStep: function (step, scenario, result, context) {
    // },

    // afterScenario: function (world, result, context) {
    // },

    // afterFeature: function (uri, feature) {
    // },

    // afterCommand: function (commandName, args, result, error) {
    // },

    // after: function (result, capabilities, specs) {
    // },

    // afterSession: function (config, capabilities, specs) {
    // },

    // onComplete: function(exitCode, config, capabilities, results) {
    // },

    // onReload: function(oldSessionId, newSessionId) {
    // },

    // beforeAssertion: function(params) {
    // },

    // afterAssertion: function(params) {
    // }
}
