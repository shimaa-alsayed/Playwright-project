import { test as base } from '@playwright/test';
import { POManager } from '../pages/poManager';
import { LoginPage } from '../pages/loginPage';

type myFixtures = {
    poManager: POManager;
    loginPage: LoginPage;
};

export const test = base.extend<myFixtures>({

    poManager: async ({ page }, use) => {

        const poManager = new POManager(page);

        await poManager.getLoginPage().open();

        use(poManager);

    },

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        use(loginPage);

    }

});

export { expect } from '@playwright/test';



// import {test as base, Fixtures } from '@playwright/test'
// import { POManager } from '../pages/poManager'
// import { LoginPage } from '../pages/loginPage'

// type myFixtures = {
// pOManager:POManager;
// loginPage:LoginPage;

// }

// const test = base.extend<Fixtures>({

//     POManager : async({page} , use ) => {

//     const poManager = new POManager(page);
//     await poManager.getLoginPage.open();
//     use (poManager);

//     },
// loginPage : async({page} , use ) => {

//     const loginPage = new LoginPage(page);
//     use (loginPage);

// }


// });