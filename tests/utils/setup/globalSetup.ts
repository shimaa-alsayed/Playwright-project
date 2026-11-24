import { chromium, FullConfig } from "@playwright/test";
import { POManager } from "../../ui/pages/poManager";
import tsData from '../../../testDate/testUsers'


async function globalsetup(config:FullConfig) {
    
 const {baseURL , storageState} = config.projects[0].use;
 const browser = await chromium.launch({headless:true, timeout:10000});
 const page = await browser.newPage();

 const po = new POManager(page);
 await page.goto(baseURL!);
 const loginpage = po.getLoginPage();
 //await po.getLoginPage().open();
 await loginpage.login(tsData.username, tsData.password);
 await page.context().storageState({path:storageState as string})
 await browser.close();
}

export default globalsetup ;





