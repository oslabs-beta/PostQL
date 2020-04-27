import mongoose from 'mongoose';
import { queriesByUser, queryMetrics } from '../modules/api/logs/mongo';

require('dotenv').config();

// logic test for Travis CI
describe('basic', () => {
  it('logic test to pass TravisCI', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('QueriesByUser Model Test', () => {

  // connect to mongoDB
  beforeAll(async () => {
    await mongoose.connect(`${process.env.LOGS_DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});

  const qmData = {
    queryIDs: ['1', '2'],
    queryString: 'qString',
    outputMetrics: ['om1', 'om2'],
    timeStamp: ['time1', 'time2'],
    counter: 0,
  };

  const qbuData = {
    username: 'testdbuser',
    queryHistory: qmData,
  };

  it('create & save user successfully', async () => {
    const validData = new queriesByUser(qmData);
    const savedData = await validData.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedData._id).toBeDefined();
    expect(savedData.username).toBe(validData.username);
    expect(savedData.queryHistory.queryString).toBe(validData.queryString);
    expect(savedData.queryHistory.queryIDs).toBe(validData.queryIDs);
    expect(savedData.queryHistory.outputMetrics).toBe(validData.outputMetrics);
    expect(savedData.queryHistory.timeStamp).toBe(validData.timeStamp);
    expect(savedData.queryHistory.counter).toBe(validData.counter);
  });
});