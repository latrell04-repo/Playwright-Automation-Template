import { test, expect } from '../../page-objects/pageFixtures'

test('Successful SignIn', async ({ page, loginPage }) => {

    // Navigate to the website
    await loginPage.goToWebsite();

    // Sign In using valid credentials
    await loginPage.signInSuccess();

    //Assertions
    await expect(page.locator('[data-test="nav-menu"]')).toContainText('TEST SAMPLE');

})

