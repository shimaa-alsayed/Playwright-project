
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
//console.log('My RP Key is:', process.env.RP_API_KEY); 
   
/**
 * See https://playwright.dev/docs/test-configuration.
 */

const rpConfig= {

endpoint: "https://demo.reportportal.io/api/v1",

apiKey: process.env.RP_API_KEY,

project: "shimaa-alsayed_personal",

launch: "test launch",

description: "My awesome launch",

attributes: [

{

key: "attributeKey",

value: "attrbiuteValue",

},

{

value: "anotherAttrbiuteValue",

},

],

mode: 'DEFAULT',

}







export default defineConfig({

  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 1,
  retries : 1,

  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers : 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    // ['dot'],
    // ['list'],
    // ['allure-playwright'],
   // ['@reportportal/agent-js-playwright', rpConfig],
    // ['json', { outputFile: 'test-results.json' }],
  ],
// snapshotDir : './tests/utils/visualsnapshots',
snapshotPathTemplate:
'./tests/visualsnapshots/{testName}-{arg}-{projectName}-{platform}{ext}',
expect :{

  timeout : 6000,    // timeout for validation
  toMatchSnapshot: {
    maxDiffPixels : 0,
  },

  toHaveScreenshot:{
  stylePath : './tests/utils/screenshot.css',
  }


},

   timeout:60*1000, // general timeout for the test run is 1 min (every test case)
   globalTimeout: 60*60*3*1000, // general timeout for the total run is 3 hrs

  /* Shared settings for all the projects below. */
  // globalSetup: require.resolve('./tests/utils/setup/globalSetup.ts'),
  // globalTeardown: require.resolve('./tests/utils/setup/globalTeardown.ts'),

  use: {

    /* Base URL to use in actions like await page.goto('') */
    // baseURL: 'http://localhost:3000',
   // baseURL : 'https://jsonplaceholder.typicode.com',

    /* Collect trace when retrying the failed test. */
    trace: 'retain-on-failure',
   // screenshot: 'on',
    headless: true,
       actionTimeout:6000,
    // navigationTimeout : 30000,
   baseURL: "https://opensource-demo.orangehrmlive.com/",
  // storageState : 'StorageState.json',


  },

  /* Configure projects for major browsers */
  projects: [
  //   {
  //     name: 'api',
  //     grep: /@api/,

  //     use: {
  //      baseURL: "https://jsonplaceholder.typicode.com",
  //      trace: 'on',
  //     },
  //   },

  // {
  //     name: 'browsercontext',
  //     use: {
  //      trace: 'retain-on-failure',
  //     },
  //   },

  // {
  //     name: 'ui',
  //     grep: /@ui/,
  //     grepInvert : /@smoke/ ,

  //     use: {
  //      baseURL: "https://opensource-demo.orangehrmlive.com/",
  //      trace: 'retain-on-failure',
  //     },
  //   },
  // // {
  // //     name: 'splitting tests',
  // //     testMatch: /.*secondScript.spec.ts/,
  // //     testIgnore: /.*firstScript.spec.ts/,

  // //     use: {
  // //      trace: 'retain-on-failure',
  // //     },
  // //   },
  //   {
  //     name: 'setup',
  //     testMatch: /.*setup.ts/,
  //     teardown: 'reset',
  //     use: {
  //       baseURL : "https://opensource-demo.orangehrmlive.com/",
  //       ...devices['Desktop Chrome'],
  //         trace: 'retain-on-failure',
  //     },
  //   },
  //   {
  //     name: 'reset',
  //     testMatch: /.*teardown.ts/,
  //     use: {
  //       baseURL : "https://opensource-demo.orangehrmlive.com/",
  //       ...devices['Desktop Chrome'],
  //         trace: 'retain-on-failure',
  //     },
  //   },

// {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop chrome'],
//         video: 'retain-on-failure',
//       },
//     },


{
      name: 'chromium',
      use: { ...devices['Desktop chrome'],
      viewport: { width: 1280, height: 920 },
      trace : 'retain-on-failure',
      },
    },



  // {
  //     name: 'chromium',
  //     dependencies: ['setup'],
  //     use: {
  //       baseURL : "https://opensource-demo.orangehrmlive.com/",
  //       ...devices['Desktop Chrome'],
  //      // viewport: { width: 128, height: 720 },

  //      // trace: 'retain-on-failure',
  //         trace:'on',
  //     },
  //   },
  //  {
  //     name: 'firefox',
  //     use: {
  //       ...devices['Desktop Firefox'],
  //       video: 'retain-on-failure',
  //     },
  //   },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
