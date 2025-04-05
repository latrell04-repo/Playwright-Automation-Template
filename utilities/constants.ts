import { chromium } from "@playwright/test"

export const Constants = {
    urls: {

        // sample only
        loginPage: 'https://practicesoftwaretesting.com'
    },
    loginCredentials: {

        // sample only
        email: 'sample@gmail.com',
        password: 'S@mpleP@ssw0rd123'
    },

}

export async function setZoom(page) {
    page.evaluate("document.body.style.zoom=0.8")
}