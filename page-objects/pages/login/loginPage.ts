import { Locator, Page } from '@playwright/test';
import { Constants } from '../../../utilities/constants';


export class LoginPage {

    //Variable for Locators
    readonly page: Page;
    readonly emailFieldInput: Locator;
    readonly passwordFieldInput: Locator;
    readonly signInBtn: Locator;
    readonly logInBtn: Locator;

    constructor(page: Page) {

        // Initialize Locators
        this.page = page;
        this.emailFieldInput = this.page.locator('[data-test="email"]');
        this.passwordFieldInput = this.page.locator('[data-test="password"]');
        this.signInBtn = this.page.locator('[data-test="nav-sign-in"]');
        this.logInBtn = this.page.locator('[data-test="login-submit"]');

    }

    // Sample method 
    async goToWebsite() {
        await this.page.goto(Constants.urls.loginPage);

    }

    async signInCredentials(emailFieldInput,passwordFieldInput){
        await this.emailFieldInput.fill(emailFieldInput);
        await this.passwordFieldInput.fill(passwordFieldInput);
        await this.logInBtn.click();
    }

    async signInSuccess(){
        await this.signInBtn.click();
        await this.signInCredentials(Constants.loginCredentials.email, Constants.loginCredentials.password);
        await this.page.waitForLoadState('networkidle');
    }

}