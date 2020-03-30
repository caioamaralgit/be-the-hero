const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', () => {
        const response = request(app)
            .post('/ongs')
            .send({
                name: 'ONG',
                email: 'ong@ong.com',
                whatsapp: '14999999999',
                city: 'Bauru',
                uf: 'SP'
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});