import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

import { queriesByUser } from '../modules/api/logs/mongo';
import logController from '../modules/api/logs/controller';

require('dotenv').config();

// logic test for Travis CI
describe('basic', () => {
  it('logic test to pass TravisCI', () => {
    expect(1 + 1).toBe(2);
  });
});

// UNIT TESTS
const queryIDs = ['1', '2'];
const outputMetrics = ['om1', 'om2'];
const timeStamp = ['time1', 'time2'];
const queryType = 'qType';
const queryString = 'qString';
const counter = queryIDs.length - 1;
const username =  'testdbuser';

const qmData = {
  queryIDs,
  queryType,
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

// for displaylogs and displaylog
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
  params: {}
} as Response;

const badres = {
  locals: {}
} as Response;

describe('displayLogs middleware', () => {
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

describe('displayLog middleware', () => {
  it('sends valid log data', async () => {
    logController.displayLog(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });
  // TO DO: To test further, need a way to access res.locals object

  it('gives back an error with bad paramters', async () => {
    logController.displayLog(badreq, res, function next(err: Error) {
      expect(err).toBeTruthy();
      expect(err.code).toBe(400);
      expect(err.message).toBe('Invalid params');
      expect(err.log).toBe('logs.displayLog: Did not receive username or queryID.');
    });
  });
});

describe('displayInstance middleware', () => {

  const req = {
    params: {
      queryID: '1',
      instanceID: '1a',
    }
  } as Request;
  
  it('sends valid instance data', async () => {
    logController.displayInstance(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });
  // TO DO: To test further, need a way to access res.locals object

  it('gives back an error with bad paramters', async () => {
    logController.displayInstance(badreq, res, function next(err: Error) {
      expect(err).toBeTruthy();
      expect(err.code).toBe(400);
      expect(err.message).toBe('Invalid params');
      expect(err.log).toBe('logs.displayInstance: Did not receive username or queryID.');
    });
  });
});

describe('displayInstance middleware', () => {
  
  it('deletes specific log', async () => {
    logController.deleteLog(req, res, next);
    expect(next).toHaveBeenCalledTimes(2); // don't have specific qID
  });
  // TO DO: To test further, need a way to access res.locals object

  it('gives back an error with bad paramters', async () => {
    logController.deleteLog(badreq, res, function next(err: Error) {
      expect(err).toBeTruthy();
      expect(err.code).toBe(400);
      expect(err.message).toBe('Invalid params');
      expect(err.log).toBe('logs.deleteLog: Did not receive username or queryID.');
    });
  });
});