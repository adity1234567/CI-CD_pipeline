const request = require('supertest');
const app = require('../index'); // Adjust the path if necessary

describe('App Routes', () => {
    
    test('GET / should return Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            msg: 'Hello World!',
            app_version: '1.0.0'
        });
    });

   
    test('GET /add/5/10 should return sum', async () => {
        const response = await request(app).get('/add/5/10');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            sum: 15
        });
    });

    // Test for add route with invalid input
    test('GET /add/a/b should return Invalid Input', async () => {
        const response = await request(app).get('/add/a/b');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            sum: "Invalid Input"
        });
    });
});
