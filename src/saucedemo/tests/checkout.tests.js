import LoginPage from '../pages/login.page.js'
import HomePage from '../pages/home.page.js'
import CartPage from '../pages/cart.page.js'
import CheckoutPage from '../pages/checkout.page.js'

fixture('Checkout Tests').page('https://www.saucedemo.com/');

test('Checkout : Correct Error Message', async t => {

    await LoginPage.Login('standard_user', 'secret_sauce')
    
    await HomePage.addSingleProduct();

    await HomePage.goToCart();

    await CartPage.clickOnCheckout();

    await CheckoutPage.clickOnContinue();
 
    await t.expect(await CheckoutPage.getErrorMessageText())
           .contains('First Name is required', 'The actual message is' + CheckoutPage.getErrorMessageText());
});

test('Checkout: Navigate to Overview', async t => {

    await LoginPage.Login('standard_user', 'secret_sauce');
    
    await HomePage.addSingleProduct();

    await HomePage.goToCart();

    await CartPage.clickOnCheckout();

    await CheckoutPage.fillPersonalInformation('TestName', 'TestLastName', '12345');

    await CheckoutPage.clickOnContinue();

    await t.expect(await CheckoutPage.isOverviewPageDisplayed()).contains('Overview', 'Checkout : Overview was not loaded.');
    
});

test('Checkout: Buy Completed', async t => {

    await LoginPage.Login('standard_user', 'secret_sauce');
    
    await HomePage.addSingleProduct();

    await HomePage.goToCart();

    await CartPage.clickOnCheckout();

    await CheckoutPage.fillPersonalInformation('TestName', 'TestLastName', '12345');

    await CheckoutPage.clickOnContinue();

    await CheckoutPage.clickOnFinish();

    await t.expect(await CheckoutPage.isBuyCompleted()).contains('THANK YOU FOR YOUR ORDER', 'The buy cannot be completed.');
    
});