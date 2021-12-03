import signInTesting from '../pageobjects/automationTest'
import automationCartTest from '../pageobjects/automationCartTest'
import randomdata from 'faker'
import signup from "../testdata/signup.json"

describe('Online clothing home page', () => {

    it('Sign up and Accont Creation', async () => {
        await signInTesting.pageurl()
        browser.maximizeWindow()
        await signInTesting.signInElement.click()
        await expect(signInTesting.headerElement).toHaveTextContaining("AUTHENTICATION")
        await signInTesting.mailId.setValue(randomdata.internet.email());
        await signInTesting.createaccountbtn.click();
        await expect(signInTesting.accountHeaderElement).toHaveTextContaining("CREATE AN ACCOUNT")
        await signInTesting.setFirstAndLastName(signup.names)
        await signInTesting.password.setValue(randomdata.internet.password(7))
        await signInTesting.selectDateOfBirth(signup.dateOfBirth)
        await signInTesting.checkedbox.click()
        await signInTesting.setCompany(signup.company)
        await signInTesting.setAddress(signup.address)
        await signInTesting.setPhoneNumber(signup.Mobile)
        await signInTesting.setAliasAddress(signup.AlisaAddress)
        await signInTesting.state.selectByAttribute("value", signup.State)
        await signInTesting.registerbtn.click()
        await expect(signInTesting.headtext).toHaveTextContaining("MY ACCOUNT")
    });

    it('Product cart validation', async () => {
        await automationCartTest.selectionpage()
        await automationCartTest.womenelement.click()
        await automationCartTest.addProductToCart()
        await expect(automationCartTest.cartValidate).toHaveText("Product successfully added to your shopping cart")
        await automationCartTest.proceedCartToCheckOut()
        await expect(automationCartTest.shoppingCartHeader).toHaveTextContaining("SHOPPING-CART SUMMARY")
        await automationCartTest.shoppingProceed()
        await expect(automationCartTest.addressHeader).toHaveTextContaining("ADDRESSES")
        await automationCartTest.addressProceed()
        await expect(automationCartTest.shippingHeader).toHaveTextContaining("SHIPPING")
        await automationCartTest.selectTerm()
        await automationCartTest.shippingProceed()
        await expect(automationCartTest.pageValidation).toHaveTextContaining("PLEASE CHOOSE YOUR PAYMENT METHOD")
        await automationCartTest.selectPaymentType()
        await expect(automationCartTest.paymentHeader).toHaveTextContaining("ORDER SUMMARY")
        await automationCartTest.clickOnConfirmOrder()
        await expect(automationCartTest.ConfirmOrdervalidation).toHaveTextContaining("ORDER CONFIRMATION")
    });
});