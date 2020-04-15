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

describe('can log in successfully', () => {
  const request = supertest(app);

  it('recieves a 412 when username is not supplied', (done) => {
    request
      .post('/api/auth/login')
      .send({
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
    request
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        type: 'login',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Password is required.' });
      })
      .expect(412, done);
  });

  it('recieves a 403 when username is incorrect', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: 'testuser_invalid',
        password: 'password',
        type: 'login',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Username and/ or password incorrect.' });
      })
      .expect(403, done);
  });

  it('recieves a 403 when password is incorrect', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password_invalid',
        type: 'login',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Username and/ or password incorrect.' });
      })
      .expect(403, done);
  });

  it('recieves a 200 when username and password are correct', (done) => {
    request
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password',
        type: 'login',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Log in successful.' });
      })
      .expect(200, done);
  });

  it('recieves cookies upon successful login', (done) => {
    expect(1).toEqual(2);
  });
});

describe('can register successfully', () => {
  const request = supertest(app);

  it('recieves a 409 when username is in use', (done) => {
    request
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password',
        email: 'testuser@email.com',
        type: 'register',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Username is taken.' });
      })
      .expect(409, done);
  });

  it('recieves a 409 when email is in use', (done) => {
    request
      .post('/api/auth/register')
      .send({
        username: 'testuser_invalid',
        password: 'password',
        email: 'testuser@email.com',
        type: 'register',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Email is linked to another account.' });
      })
      .expect(409, done);
  });

  it('recieves a 403 when username is not supplied', (done) => {
    request
      .post('/api/auth/register')
      .send({
        password: 'newpassword',
        email: 'newuser@email.com',
        type: 'register',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Username is required.' });
      })
      .expect(403, done);
  });

  it('recieves a 403 when password is not supplied', (done) => {
    request
      .post('/api/auth/register')
      .send({
        username: 'newuser',
        email: 'newuser@email.com',
        type: 'register',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Password is required.' });
      })
      .expect(403, done);
  });

  it('recieves a 403 when email is not supplied', (done) => {
    request
      .post('/api/auth/register')
      .send({
        username: 'newuser',
        password: 'newpassword',
        type: 'register',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Email is required.' });
      })
      .expect(403, done);
  });

  it('recieves a 200 when registration is successful', (done) => {
    request
      .post('/api/auth/register')
      .send({
        username: 'newuser',
        password: 'newpassword',
        email: 'newuser@email.com',
        type: 'register',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body).toEqual({ message: 'Registraton is successful.' });
      })
      .expect(200, done);
  });

  it('recieves cookies upon successful registration', (done) => {
    expect(1).toEqual(2);
  });
});

describe('can logout successfully', () => {
  it('invalidates cookies on logout', (done) => {
    expect(1).toEqual(2);
  });

  it('recieves a 205 if logout is requested while not logged in', (done) => {
    expect(1).toEqual(2);
  });
});
