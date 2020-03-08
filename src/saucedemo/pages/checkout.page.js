import { Selector, t } from 'testcafe';


class CheckoutPage
{
    constructor()
    {
        this.continueBtn = Selector('input.btn_primary.cart_button');
        this.firstNameTxt= Selector('#first-name');
        this.lastNameTxt = Selector('#last-name');
        this.zipCodeTxt = Selector('#postal-code');
        this.errorMessage = Selector('.checkout_info_container  h3');
        this.subheaderContainer = Selector('.subheader');
        this.finishBtn = Selector('a.btn_action');
        this.thankyouMessage = Selector('h2.complete-header');
    }

    async fillPersonalInformation(name, lastname, zip)
    {
      await t.typeText(this.firstNameTxt, name) 
             .typeText(this.lastNameTxt, lastname)
             .typeText(this.zipCodeTxt, zip);
    }

    async clickOnContinue()
    {
        await t.click(this.continueBtn);
        
    }

    async clickOnFinish()
    {
        await t.click(this.finishBtn);
        
    }

    async getErrorMessageText()
    {
        let currentErrorMessage;

        if(this.errorMessage.exists)
        {
            currentErrorMessage = await this.errorMessage.textContent;
        }
        else
        {
            currentErrorMessage = 'The error messages was not displayed.';
        }

        return currentErrorMessage;
    }

    async isOverviewPageDisplayed()
    {
        return await this.subheaderContainer.textContent;
    }

    async isBuyCompleted()
    {
        return await this.thankyouMessage.textContent;
    }
}

export default new CheckoutPage();