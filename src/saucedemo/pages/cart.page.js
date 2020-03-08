import { Selector, t } from 'testcafe';

class CartPage{

    constructor() {
        this.checkoutBtn = Selector('a.btn_action');
        this.continueShoppingBtn = Selector('a.btn_secondary');
        this.cartList = Selector('.cart_item');        
    }
 
    async cartPageDisplayed()
    {
      return  await this.checkoutBtn.exists;
    }

    async countItemsAddedToCart(){

        var itemsInCart = this.cartList.count;
        
        
        return itemsInCart;
    }

    async clickOnCheckout()
    {
        await t.click(this.checkoutBtn);
    }
}

export default new CartPage();

