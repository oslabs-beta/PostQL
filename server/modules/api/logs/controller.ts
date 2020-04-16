import { NextFunction } from 'express';
import moment from 'moment';
import { queriesByUser } from './mongo';

interface LogController {
  addLog(req: Request, res: Response, next: NextFunction): any;
  displayLogs(req: Request, res: Response, next: NextFunction): any;
  displayLog(req: Request, res: Response, next: NextFunction): any;
}

const logController: LogController = {
  
  addLog(req: Request, res: Response, next: NextFunction) {
    const { queryString, outputMetrics } = req.body;
    const { username } = res.locals;

    if (!outputMetrics || !queryString || !username) {
      return next({
        code: 400,
        message: 'Invalid params.',
        log: 'logs.addLog: Need all information for req.',
      });
    }

    queriesByUser.findOne({ username }, (err: Error, results: any) => {
      if (err) {
        return next({
          code: 400,
          message: 'Error with MongoDB',
          log: 'logs.addLog: Error with DB when searching for username.',
        });
      }

      if (!results) {
        // no user yet, add a new user document
        queriesByUser.create({ username }, (err:Error, results: any) => {
          if (err) {
            return next({
              code: 400,
              message: 'Error with MongoDB',
              log: 'logs.addLog: Error with DB when creating new user.',
            });
          }
        });
      }
    });

    queriesByUser.findOne({ username }, (err: Error, results: any) => {
      if (err) {
        return next({
          code: 400,
          message: 'Error with MongoDB',
          log: 'logs.addLog: Error with DB when searching for queries by user',
        });
      }
      if (!results) {
        // some sort of error
        return next({
          code: 400,
          message: 'Error with user retrieval',
          log: 'logs.addLog: Error with DB when searching for user',
        });
      }

      if (results) {
        const { queryHistory } = results;
        const curTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        let bFound = false;
  
        if (queryHistory.length) {
          for (let i = 0; i < queryHistory.length; i += 1) {
            if (queryHistory[i].queryString === queryString) {

              // found the existing query, add to this
              queryHistory[i].outputMetrics.push(outputMetrics);
              queryHistory[i].timeStamp.push(curTime);
              queryHistory[i].counter += 1;
              bFound = true;
              results.save();
            }
          }
        }
        
        if (!bFound) {
          // create new log
          queryHistory.push({ queryString, outputMetrics, timeStamp: [curTime] });
          results.save();
        }
      }
    });
    return next();
  },

  displayLogs(req: Request, res: Response, next: NextFunction) {
    const { username } = res.locals;

    queriesByUser.find({ username }, (err: Error, results: any) => {
      if (err) {
        // some sort of error
        return next({
          code: 400,
          message: 'Error with user retrieval',
          log: 'logs.addLog: Error with DB when searching for user',
        });
      }

      if (results) {
        res.locals.logs = results[0].queryHistory;
      }
      // if no results, just move onto next middleware
      return next();
    });
  },

  displayLog(req: Request, res: Response, next: NextFunction) {
    const { username } = res.locals;

    queriesByUser.find({ username }, (err: Error, results: any) => {
      if (err) {
        // some sort of error
        return next({
          code: 400,
          message: 'Error with user retrieval',
          log: 'logs.addLog: Error with DB when searching for user',
        });
      }

      if (results) {
        const { queryHistory } = results[0];
        // only if there are queries
        if (queryHistory.length) {
          for (let i = 0; i < queryHistory.length; i += 1) {
            if (queryHistory[i]['_id'] == req.params.queryID) res.locals.log = queryHistory[i];
          }
        } else res.locals.log = []; // no query history
      }
      return next();
    })
  }
}

export default logController;