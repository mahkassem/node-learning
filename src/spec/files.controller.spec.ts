import app from '../app'
import request from 'supertest'

describe('Files API', () => {
    it('It should return 200', async () => {
        const res = await request(app).get('/files/test.txt')
        expect(res.status).toBe(200)
    })

    it('It should return 404', async () => {
        const res = await request(app).get('/files/test2.txt')
        expect(res.status).toBe(404)
    })
})