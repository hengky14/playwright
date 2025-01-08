import newCheckoutLocator from "../locator/newCheckoutLocator";

export default class newCheckoutAction {
    constructor(page) {
        this.page = page;
        this.newCheckoutLocator = new newCheckoutLocator();
        this.cartLink = page.locator(this.newCheckoutLocator.cartLink);
        this.checkoutButton = page.locator(this.newCheckoutLocator.checkoutButton);
        this.firstNameInput = page.locator(this.newCheckoutLocator.firstNameInput);
        this.lastNameInput = page.locator(this.newCheckoutLocator.lastNameInput);
        this.postalCodeInput = page.locator(this.newCheckoutLocator.postalCodeInput);
        this.continueButton = page.locator(this.newCheckoutLocator.clickContinueButton);
        this.finishButton = page.locator(this.newCheckoutLocator.clickFinishButton);
        this.addToCartButton = page.locator(this.newCheckoutLocator.addToCartButton);
        this.addToCartSauceLabsBackpack = page.locator(this.newCheckoutLocator.addToCartSauceLabsBackpack);
    }


    async addToCart() {
        await this.addToCartSauceLabsBackpack.click();
    }

    async clickCart() {
        await this.cartLink.click();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async fillFirstName(firstName) {
        await this.page.fill(this.newCheckoutLocator.firstNameInput, firstName);
    }

    async fillLastName(lastName) {
        await this.page.fill(this.newCheckoutLocator.lastNameInput, lastName);
    }

    

    async fillPostalCode(postalCode) {
        await this.page.fill(this.newCheckoutLocator.postalCodeInput, postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async thankYouText() {
        await this.page.locator(this.newCheckoutLocator.thankYouText).textContent();
    }
}