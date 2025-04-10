import { test, request, expect } from '@playwright/test';
import { Constants } from '../utilities/constants';

// GET API Testing

test('Test GET API', async ({ request }) => {
    const getAPIURL = Constants.urls.getAPIURL;
    const response = await request.get(getAPIURL);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect (body.length).toBe(3);
    console.log(body);
});

// POST API Testing

test('Test POST API', async ({ request }) => {
    const postAPIURL = Constants.urls.postAPIURL;
    const response = await request.post(postAPIURL, {
        data: {
            jsonrpc: '2.0',
            method: 'user.login',
            params: {
                username: 'gauser',
                password: 'P@ssw0rdz',
            },
            id: 1,
        },
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    console.log(body);
})