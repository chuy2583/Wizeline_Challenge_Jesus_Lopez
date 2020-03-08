import LoginPage from '../pages/login.page.js'
import HomePage from '../pages/home.page.js'

fixture('Login Tests').page('https://www.saucedemo.com/');

test('Login Successful', async t => {
    await LoginPage.Login('standard_user', 'secret_sauce');
    await t.expect(await HomePage.isHomePageLoaded()).ok();
});

test('Login Fail: Empty fields', async t => {
    await LoginPage.Login('standard_user', 'xxxxx');
    await t.expect(await LoginPage.isErrorMessage()).ok();
});

test('Login Fail : Locked Uer', async t => {
    await LoginPage.Login('locked_out_user', 'secret_sauce');    
    await t.expect(await LoginPage.getErrorMessageText())
           .contains('Sorry, this user has been locked out.', 'The actual message is' + LoginPage.getErrorMessageText());
});


test('Login Fail : Incorrect User or Password', async t => {
    await LoginPage.Login(' ', 'secret_sauce');
    await t.expect(await LoginPage.getErrorMessageText())
           .contains('Username and password do not match any user in this service', 'The actual message is' + LoginPage.getErrorMessageText());
});

test('Login & Logout Succesful', async t => {
    await LoginPage.Login('standard_user', 'secret_sauce');
    await HomePage.logout();
    await t.expect(LoginPage.loginBtn.exists).ok();
});

