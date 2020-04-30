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

  const queryIDs = ['1', '2'];
  const outputMetrics = ['om1', 'om2'];
  const timeStamp = ['time1', 'time2'];
  const queryType = 'type';

  const qmData = {
    queryIDs,
    queryType,
    queryString: 'qString',
    outputMetrics,
    timeStamp,
    counter: queryIDs.length - 1,
  };

  const qbuData = {
    username: 'testdbuser',
    queryHistory: qmData,
  };

  // only need to test addition currently
  it('create & save user successfully', async () => {
    const validData = new queriesByUser(qbuData);
    const savedData = await validData.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedData._id).toBeDefined();
    expect(savedData.username).toBe(validData.username);
    expect(savedData.queryHistory.queryString).toBe(validData.queryString);
    expect(savedData.queryHistory.queryType).toBe(validData.queryType);
    expect(savedData.queryHistory.queryIDs).toBe(validData.queryIDs);
    expect(savedData.queryHistory.outputMetrics).toBe(validData.outputMetrics);
    expect(savedData.queryHistory.timeStamp).toBe(validData.timeStamp);
    expect(savedData.queryHistory.counter).toBe(validData.counter);
  });

  const badqbuData = {
    queryHistory: ['blah'],
  };

  // test failed validation
  it('error with invalid schema parameters', async () => {
    const nonValidData = new queriesByUser(badqbuData);
    let err;

    try {
      const savedData = await nonValidData.save();
      let error = savedData;
    } catch (error) {
        err = error
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    expect(err.errors.username).toBeDefined();
  });

});