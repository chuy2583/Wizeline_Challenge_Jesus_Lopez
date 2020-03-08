import {Selector,t } from 'testcafe'; 
import { timingSafeEqual } from 'crypto';

class LoginPage
{
    constructor()
    {
        this.userNameTxt = Selector('#user-name');
        this.passwordTxt = Selector('#password');
        this.loginBtn = Selector('input.btn_action');
        this.isErrorMessage = Selector('#login_button_container h3');
    }

    async Login(user, password)
    {
      await t.typeText(this.userNameTxt, user) 
             .typeText(this.passwordTxt, password)
             .click(this.loginBtn);
    }

    async isErrorMessage()
    {
        return await this.errorMessageContainer.exists;
    }

    async getErrorMessageText()
    {
        let currentErrorMessage;

        if(this.isErrorMessage.exists)
        {
            currentErrorMessage = await this.isErrorMessage.textContent;
        }
        else
        {
            currentErrorMessage = 'The error messages was not displayed.';
        }

        return currentErrorMessage;
    }
}

export default new LoginPage();