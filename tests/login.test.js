const request = require('supertest');
const app = require('../server');

describe('POST /login email validation', () => {
  test('rejects malformed email "test@" with 400 and message', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@' })
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid email');
  });

  test('accepts a valid email', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'user@example.com' })
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'OK');
  });
});
