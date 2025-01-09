const { test, expect, request } = require('@playwright/test');


test.describe('New API Test', () => {
    test('get', async ({ }) => {
        const apiContext = await request.newContext();
        const response = await apiContext.get('https://reqres.in/api/users?page=2');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.data.length).toBeGreaterThan(0);
        expect(responseBody.page).toBe(2);
        expect(responseBody.per_page).toBe(6);
        expect(responseBody.total).toBe(12);
        expect(responseBody.total_pages).toBe(2);
        
        console.log(responseBody);
    });

    test('post', async ({ }) => {
        const apiContext = await request.newContext();
        const data = {
            name: 'hengky',
            job: 'developer'
        }
        const response = await apiContext.post('https://reqres.in/api/users', {
            data: data
        });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.name).toBe('hengky');
        expect(responseBody.job).toBe('developer');
        console.log(responseBody);
    });

    test('put', async ({ }) => {
        const apiContext = await request.newContext();
        const data = {
            name: 'hengky',
            job: 'fullstack developer'
        }
        const response = await apiContext.put('https://reqres.in/api/users/2', {
            data: data
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.name).toBe('hengky');
        expect(responseBody.job).toBe('fullstack developer');
        console.log(responseBody);
    });

    test('delete', async ({ }) => {
        const apiContext = await request.newContext();
        const response = await apiContext.delete('https://reqres.in/api/users/2');
        expect(response.status()).toBe(204);
    });

    test('get-by-id ', async ({ }) => {
        const apiContext = await request.newContext();
        const response = await apiContext.get('https://reqres.in/api/users/2');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.data.id).toBe(2);
        expect(responseBody.data.email).toBe('janet.weaver@reqres.in');
        expect(responseBody.data.first_name).toBe('Janet');
        expect(responseBody.data.last_name).toBe('Weaver');
        expect(responseBody.data.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');
        console.log(responseBody);
    });

    test('register-success', async ({ }) => {
        const apiContext = await request.newContext();
        const data = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        const response = await apiContext.post('https://reqres.in/api/register', {
            data: data
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.id).toBe(4);
        expect(responseBody.token).toBe('QpwL5tke4Pnpja7X4');
        console.log(responseBody);
    });

    test('register-unsuccess', async ({ }) => {
        const apiContext = await request.newContext();
        const data = {
            email: 'sally@example.com'
        }
        const response = await apiContext.post('https://reqres.in/api/register', {
            data: data
        });
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.error).toBe('Missing password');
        console.log(responseBody);
    });

    test('login-success', async ({ }) => {
        const apiContext = await request.newContext();
        const data = {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }
        const response = await apiContext.post('https://reqres.in/api/login', {
            data: data
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.token).toBe('QpwL5tke4Pnpja7X4');
        console.log(responseBody);
    });

    test('login-unsuccess', async ({ }) => {
        const apiContext = await request.newContext();
        const data = {
            email: 'peter@klaven'
        }
        const response = await apiContext.post('https://reqres.in/api/login', {
            data: data
        });
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.error).toBe('Missing password');
        console.log(responseBody);
    });

    test('delay-response', async ({ }) => {
        const apiContext = await request.newContext();
        const response = await apiContext.get('https://reqres.in/api/users?delay=3');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.page).toBe(1);
        expect(responseBody.per_page).toBe(6);
        expect(responseBody.total).toBe(12);
        expect(responseBody.total_pages).toBe(2);
        console.log(responseBody);
    });

});
