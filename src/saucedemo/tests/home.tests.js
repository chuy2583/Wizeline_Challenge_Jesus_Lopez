import LoginPage from '../pages/login.page.js'
import HomePage from '../pages/home.page.js'
import CartPage from '../pages/cart.page.js'


fixture('Home Tests').page('https://www.saucedemo.com/');

test('Navigate to Cart', async t => {
    await LoginPage.Login('standard_user', 'secret_sauce');
    
    await HomePage.goToCart();

   await t.expect(await CartPage.cartPageDisplayed()).ok();

});

test('Add a product to Cart', async t => {
    await LoginPage.Login('standard_user', 'secret_sauce');

    await HomePage.addSingleProduct();

    await HomePage.goToCart();

    await t.expect(await CartPage.countItemsAddedToCart()).gt(0, 'The areno products in the cart');

});

test('Add multiple products to Cart', async t => {
    await LoginPage.Login('standard_user', 'secret_sauce');

    await HomePage.addMultibleProducts();

    await HomePage.goToCart();

    await t.expect(await CartPage.countItemsAddedToCart()).gt(1, 'The resutl should greater than one');

});
