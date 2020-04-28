import supertest from 'supertest';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

import { queriesByUser, queryMetrics } from '../modules/api/logs/mongo';
import logController from '../modules/api/logs/controller';

require('dotenv').config();

// logic test for Travis CI
describe('basic', () => {
  it('logic test to pass TravisCI', () => {
    expect(1 + 1).toBe(2);
  });
});

const queryIDs = ['1', '2'];
const outputMetrics = ['om1', 'om2'];
const timeStamp = ['time1', 'time2'];
const queryString = 'qString';
const counter = queryIDs.length - 1;
const username =  'testdbuser';

const qmData = {
  queryIDs,
  queryString,
  outputMetrics,
  timeStamp,
  counter,
};

const qbuData = {
  username,
  queryHistory: qmData,
};

const next:NextFunction = jest.fn();

beforeAll(async () => {
  await mongoose.connect(`${process.env.LOGS_DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    async function saveData () {
      const validData = new queriesByUser(qbuData);
      const savedData = await validData.save();
    }
    saveData();
  });
});

describe('addlog middleware', () => {
  const req = {
    body: {
      queryString: 'qString1',
      outputMetrics: 'output1',
    }
  } as Request;

  const res = {
    locals: {
      username: 'user1',
    }
  } as Response;

  it('adds a new log with valid parameters', async () => {
    logController.addLog(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  const badRes = {
    locals: {
    }
  } as Response;

  it('gives back an error with bad paramters', async () => {
    logController.addLog(req, badRes, function next(err: Error) {
      expect(err).toBeTruthy();
      expect(err.code).toBe(400);
      expect(err.message).toBe('Invalid params');
      expect(err.log).toBe('logs.addLog: Did not receive all needed params.');
    });
  });
});

describe('displayLogs middleware', () => {

  const req = {} as Request;

  const res = {
    locals: {
      username: 'testdbuser',
    }
  } as Response;

  const badres = {
    locals: {
    }
  } as Response;
  
  it('sends valid logs data for user', async () => {
    logController.displayLogs(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  // TO DO: To test further, need a way to access res.locals object

  it('gives back an error with bad paramters', async () => {
    logController.displayLogs(req, badres, function next(err: Error) {
      expect(err).toBeTruthy();
      expect(err.code).toBe(400);
      expect(err.message).toBe('Invalid params');
      expect(err.log).toBe('logs.displayLogs: Did not receive username.');
    });
  });
});

describe('displayLogs middleware', () => {

  const req = {
    params: {
      queryID: '1',
    }
  } as Request;

  const res = {
    locals: {
      username: 'testdbuser',
    }
  } as Response;

  const badreq = {
  } as Response;

  it('gives back an error with bad paramters', async () => {
    logController.displayLogs(badreq, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  // TO DO: To test further, need a way to access res.locals object

  it('sends valid logs data for user', async () => {
    logController.displayLogs(badreq, res, function next(err: Error) {
      expect(err).toBeTruthy();
      expect(err.code).toBe(400);
      expect(err.message).toBe('Invalid params');
      expect(err.log).toBe('logs.displayLogs: Did not receive username.');
    });
  });
});

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
// use selenium to test frontend and backend