import {expect,  type Locator, type Page} from "@playwright/test";

export class HomePage{
//===================Locator=====================
readonly page: Page;
readonly profile_icon: Locator;

//===================Variable====================
//===================Constractor=================
constructor (page:Page){
this.page = page ;
//this.profile_icon = page.getByAltText('profile picture');

this.profile_icon = page.getByRole('banner')
    .getByRole('img', { name: 'profile picture' });
}

//===================Methods=====================
//-------------------Actions---------------------

//-------------------Assertions-----------------

async assertProfileIcon(){
        await expect (this.profile_icon).toBeVisible();
    }


}