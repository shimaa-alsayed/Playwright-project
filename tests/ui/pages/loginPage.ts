import {expect,  type Locator, type Page} from "@playwright/test";

export class LoginPage{
//===================Locator=====================
readonly page: Page;
readonly username_tb: Locator;
readonly password_tb: Locator;
readonly login_btn:  Locator;
readonly invalidLoginMessage: Locator;
//===================Variable====================
readonly url: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' ;
readonly invalidLoginMessageText: string = "Invalid credentials" ;           ;
//===================Constractor=================
constructor (page:Page){
this.page = page ;
this.username_tb = page.getByPlaceholder('Username');
this.password_tb = page.getByPlaceholder('Password');
this.login_btn = page.getByRole('button',{name:'Login'});
this.invalidLoginMessage = page.locator('.oxd-alert-content-text');


}
//===================Methods=====================
//-------------------Actions---------------------
async open () {
await this.page.goto (this.url);
}
async login (username:string , password:string)
{
    await this.username_tb.fill(username);
    await this.password_tb.fill(password);
    await this.login_btn.click();
    

}
//-------------------Assertions-----------------

async assertinvalidLoginMessage(){
        await expect (this.invalidLoginMessage).toHaveText(this.invalidLoginMessageText);
    }


}