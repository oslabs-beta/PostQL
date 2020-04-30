/* eslint-disable linebreak-style */
import mongoose from 'mongoose';

require('dotenv').config();

// need to manually break up URI thanks to TravisCI
mongoose.connect(`${process.env.LOGS_DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const queryMetricsSchema = new mongoose.Schema({
  queryIDs: { type: Array, required: true },
  queryString: { type: String, required: true },
  queryType : { type : String, required: true },
  outputMetrics: { type: Array, required: true },
  timeStamp: { type: Array, required: true },
  counter: { type: Number, default: 0 },
});

const queryMetrics = mongoose.model('QueryMetrics', queryMetricsSchema);

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  queryHistory: [queryMetricsSchema],
});

const queriesByUser = mongoose.model('QueriesbyUser', usersSchema);

export { queryMetrics, queriesByUser };
