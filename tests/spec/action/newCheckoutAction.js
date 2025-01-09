import newCheckoutLocator from "../locator/newCheckoutLocator";
import { expect } from "@playwright/test";

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

    async addUser(firstName, lastName, postalCode) {
        await this.page.fill(this.newCheckoutLocator.firstNameInput, firstName);
        await expect(this.page.locator(this.newCheckoutLocator.firstNameInput)).toHaveValue('hengky');
        await this.page.fill(this.newCheckoutLocator.lastNameInput, lastName);
        await expect(this.page.locator(this.newCheckoutLocator.lastNameInput)).toHaveValue('reza');
        await this.page.fill(this.newCheckoutLocator.postalCodeInput, postalCode);
        await expect(this.page.locator(this.newCheckoutLocator.postalCodeInput)).toHaveValue('12345');
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