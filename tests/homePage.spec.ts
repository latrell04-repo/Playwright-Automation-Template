import { test, expect } from '../page-objects/pageFixtures'


test('Check NavBar if Visible', async ({ page, homePage,loginPage }) => {

    await loginPage.goToWebsite();
    await expect(homePage.navBar.host).toBeVisible();
    
})