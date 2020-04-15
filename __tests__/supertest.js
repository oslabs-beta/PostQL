const supertest = require('supertest');
const app = require('../server');

describe('miscellaneous tasks', () => {
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

  it('recieves a 400 when type of submission is blank', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: '',
        password: 'password',
        type: '',
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Invalid request.' });
      })
      .expect(400, done);
  });

  it('recieves a 400 when type of submission is null', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: '',
        password: 'password',
        type: null,
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Invalid request.' });
      })
      .expect(400, done);
  });

  it('recieves a 400 when type of submission is undefined', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: '',
        password: 'password',
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Invalid request.' });
      })
      .expect(400, done);
  });
});

describe('can login successfully', () => {
  const request = supertest(app);

  it('recieves a 412 when username is not supplied', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: '',
        password: 'password',
        type: 'login',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Username is required.' });
      })
      .expect(412, done);
  });

  it('recieves a 412 when password is not supplied', (done) => {
    done();
  });

  it('recieves a 403 when username is incorrect', (done) => {
    done();
  });

  it('recieves a 403 when password is incorrect', (done) => {
    done();
  });

  it('recieves a 200 when username and password are correct', (done) => {
    done();
  });

  it('recieves cookies upon successful login', (done) => {
    done();
  });
});

describe('can register successfully', () => {
  it('recives a 409 when username is in use', (done) => {
    done();
  });

  it('recieves a 409 when email is in use', (done) => {
    done();
  });

  it('recieves a 403 when username is not supplied', (done) => {
    done();
  });

  it('recieves a 403 when password is not supplied', (done) => {
    done();
  });

  it('recieves a 403 when email is not supplied', (done) => {
    done();
  });

  it('recieves a 200 when registration is successful', (done) => {
    done();
  });

  it('recieves cookies upon successful registration', (done) => {
    done();
  });
});

describe('can logout successfully', () => {
  it('invalidates cookies on logout', (done) => {
    done();
  });

  it('returns a 205 if logout is requested while not logged in', (done) => {
    done();
  });
});
