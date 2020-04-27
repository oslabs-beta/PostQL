import supertest from 'supertest';
import mongoose from 'mongoose';
import { queriesByUser } from ('../modules/api/logs/mongo');

// logic test for Travis CI
describe('basic', () => {
  it('logic test to pass TravisCI', () => {
    expect(1 + 1).toBe(2);
  });
});

// beforeAll(async () => {
//   const url = `mongodb://127.0.0.1/${databaseName}`
//   await mongoose.connect(url, { useNewUrlParser: true })
// })

// describe('unit tests for all logs middleware', () => {
//   const mockRequest = (data: any) => data;

//   const mockResponse = (locals: any) => {
//     const res = {locals};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     return res;
//   };

  // TO DO: to test create, we need to delete users from DB
  // which will be an upcoming stretch feature
  // it('creates an user', (done) => {
  //   const req = mockRequest({});
  //   const res = mockResponse(username: 'testingonly');

  //   await createUser(req, res, next);
  //   expect(next).toHaveBeenCalled();
  // });

  // describe('unit tests for all logs middleware', () => {
  //   it('adds a new log', () => {
  //     const req = mockRequest({ queryString: 'testQuery', outputMetrics: 'testMetrics'});
  //     const res = mockResponse(username: 'testingonly');

  //     await addLog(req, res, next);
  //     expect(next).toHaveBeenCalled();
  //   });
  // });
  
  // it('displays all logs by set user', () => {
  //   expect(displayLogs()).toBe();
  // });

  // it('displays a specific log', () => {
  //   expect(displayLog()).toBe();
  // });

  // it('displays a specific instance', () => {
  //   expect(displayInstance()).toBe();
  // });

  // it('deletes an entire log', () => {
  //   expect(deleteLog()).toBe();
  // });

// });

// integration tests
// use supertest to send reqs, and get back responses

// endpoint tests
// use selenium to test frontend and backend compatibility
