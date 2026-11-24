import { test, webkit } from '@playwright/test';

test('apply browser context', async ({  }) => {

  const browser = await webkit.launch();
  //browser.close();
  const context = await browser.newContext();
  //context.close();
  const page   = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.pause();

});

