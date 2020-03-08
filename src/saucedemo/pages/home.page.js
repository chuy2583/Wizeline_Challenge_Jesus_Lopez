import { Selector, t } from 'testcafe';

class HomePage{

    constructor()
    {
        this.headerContainer = Selector('#header_container');
        this.cartLnk = Selector('#shopping_cart_container > a');
        this.menuBtn = Selector('.bm-burger-button');
        this.logoutLnk = Selector('#logout_sidebar_link'); 
        this.addToCartBtn = Selector('.inventory_container .btn_primary');
        
    }

    async isHomePageLoaded()
    {
        return await this.headerContainer.exists;
    }

    async logout()
    {
        if(this.isHomePageLoaded)
        {
           await  t.click(this.menuBtn)
             .click(this.logoutLnk);
        }
    }

    async addSingleProduct(){
        await t.click(this.addToCartBtn);
    }

    async addMultibleProducts(){               

        for(let i= 0; i < 3; i++)
        {
            await t.click(this.addToCartBtn.nth(i));
        }
    }

    async goToCart()
    {
        await t.click(this.cartLnk);
    }

}

export default new HomePage();