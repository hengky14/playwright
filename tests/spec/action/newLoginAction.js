import newLoginLocator from "../locator/newLoginLocator";
import { expect } from "@playwright/test";

export default class newLoginAction {
    constructor(page) {
        this.page = page;
        this.newLoginLocators = new newLoginLocator();
        this.userNameInput = page.locator(this.newLoginLocators.userNameInput);
        this.passwordInput = page.locator(this.newLoginLocators.passwordInput);
        this.clickLoginButton = page.locator(this.newLoginLocators.clickLoginButton);
    }


    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userName, password) {
        await this.userNameInput.fill(userName);
        await expect(this.userNameInput).toHaveValue("standard_user");
        await this.passwordInput.fill(password);
        await expect(this.passwordInput).toHaveValue("secret_sauce");
        await this.clickLoginButton.click();
    }

}