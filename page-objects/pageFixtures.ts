import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../page-objects/pages/login/loginPage';
import HomePage from '../page-objects/pages/homePage';

// Create a custom fixture that sets up the pages
type myPages = {
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = baseTest.extend<myPages>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

});

// Export expect for consistency
export { expect } from '@playwright/test';