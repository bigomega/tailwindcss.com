// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test','nightwatch/examples'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['nightwatch/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: ['@nightwatch/browserstack'],
  '@nightwatch/browserstack': {
    browserstackLocal: 'true', opts: { forcelocal: false } // set true to manage browserstack local tunnel. Defaults to false.
  },

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost:3000/',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },

    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the browserstack.com cloud service                    |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: 'hub.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options': {
          buildName: 'tailwind-e2e-test',
          projectName: 'OSS Implementations',
          debug: 'true',
          networkLogs: 'true',
          consoleLogs: 'info',
          source: 'nightwatch:sample-sdk:v1.0',
          seleniumVersion: '4.0.0',
          userName: '---',
          accessKey: '---',
        },
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },

    'browserstack.local': {
      extends: 'browserstack',
      desiredCapabilities: {
        'browserstack.local': true,
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },

    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        browserVersion: '103.0',
        'bstack:options': {
          os: 'Windows',
          osVersion: '11',
          local: 'false'
        },
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },

    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox',
        browserVersion: '102.0',
        'bstack:options': {
          os: 'Windows',
          osVersion: '10',
          local: 'false'
        }
      }
    },

    'browserstack.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'safari',
        browserVersion: '14.1',
        'bstack:options': {
          os: 'OS X',
          osVersion: 'Big Sur',
          local: 'false'
        }
      }
    },

    'browserstack.android.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        'bstack:options' : {
          osVersion: '12.0',
          deviceName: 'Samsung Galaxy S22'
        },
        browserName: 'chrome',
        'goog:chromeOptions': {
          // w3c: false
        }
      }
    },

    'browserstack.ios.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'safari',
        'bstack:options' : {
          osVersion: "15.5",
          deviceName: "iPhone 13"
        },
      }
    },

  },

  usage_analytics: {
    enabled: true,
    log_path: './logs/analytics',
    client_id: '401fd402-38e1-4be9-acf3-7afbc9a6aa30'
  }

};
