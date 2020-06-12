const server = require('./server');
const supertest = require('supertest');


describe('server.js', () => {
    describe('GET', () => {
        it('Sends back a 200 success code', async () => {
            const response = await supertest(server).get('/');

            expect(response.status).toEqual(200)
        })
        it('Sends back the appriopriate JSON object', async () => {
            const expectedBody = { message: 'The App is working' };
            const response = await supertest(server).get('/');

            expect(response.body).toEqual(expectedBody)
        })
    })

})