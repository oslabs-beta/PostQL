const supertest = require('supertest');
const app = require('../server');

describe('can login successfully', () => {
  const request = supertest(app);

  it('successfully pings /api/auth route', (done) => {
    request
      .get('/api/auth')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
