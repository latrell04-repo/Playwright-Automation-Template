import { chromium } from "@playwright/test"

export const Constants = {
    urls: {

        // sample only
        loginPage: 'https://practicesoftwaretesting.com',
        getAPIURL: 'https://api.practicesoftwaretesting.com/categories/tree',
        postAPIURL: 'http://10.120.10.121:8080/api_jsonrpc.php'
    },
    loginCredentials: {

        // sample only
        email: 'sampleusername@gmail.com',
        password: 'SampleAccount123!'
    },

}

export async function setZoom(page) {
    page.evaluate("document.body.style.zoom=0.8")
}