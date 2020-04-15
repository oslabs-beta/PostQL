const supertest = require('supertest');
const app = require('../server');

describe('can login successfully', () => {
  const request = supertest(app);

  it('successfully pings /api/auth route', (done) => {
    request
      .get('/api/auth')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Successfully pinged /api/auth' });
      })
      .expect(200, done);
  });
});
