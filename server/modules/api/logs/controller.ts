
import { NextFunction } from 'express';
import { json } from 'body-parser';
import moment from 'moment';
import { queryMetrics, queriesByUser } from './mongo';

interface LogController {
  validateUser(req: Request, res: Response, next: NextFunction): any;
  addLog(req: Request, res: Response, next: NextFunction): any;
  displayLogs(req: Request, res: Response, next: NextFunction): any;
  displayLog(req: Request, res: Response, next: NextFunction): any;
}

const logController: LogController = {
  validateUser(req: Request, res: Response, next: NextFunction) {
    fetch('/api/auth/validate')
      .then((data) => data.json())
      .then((response) => {
        if (response.body.username) response.locals.userName = response.body.username;
        return next({
          code: 400,
          message: 'Invalid username.',
          log: 'logs.validateUser: Current username is not valid',
        });
      });
    return next();
  },

  addLog(req: Request, res: Response, next: NextFunction) {
    const { queryString, outputMetrics } = req.body;
    const { userName } = res.locals;

    if (!outputMetrics || !queryString || !userName) {
      return next({
        code: 400,
        message: 'Invalid params.',
        log: 'logs.addLog: Need all information for req.',
      });
    }

    queriesByUser.findOne({ userName }, (err: Error, results: any) => {
      if (err) {
        return next({
          code: 400,
          message: 'Error with MongoDB',
          log: 'logs.addLog: Error with DB when searching for username.',
        });
      }

      if (!results) {
        // no user yet, add a new user document
        queriesByUser.create({ userName }, (err:Error, results: any) => {
          if (err) {
            return next({
              code: 400,
              message: 'Error with MongoDB',
              log: 'logs.addLog: Error with DB when creating new user.',
            });
          }
          return results;
        });
      }
      return results;
    });

    queriesByUser.findOne({ userName }, (err: Error, results: any) => {
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

      const { queryHistory: queries } = results;
      const curTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      let bFound = false;

      for (let i = 0; i < queries.length; i += 1) {
        if (queries[i].queryString === queryString) {
          // found the existing query, add to this
          queries[i].outputMetrics.push(outputMetrics);
          queries[i].timestamp.push(curTime);
          queries[i].counter += 1;
          bFound = true;
          results.save();
        }
      }

      if (!bFound) {
        // create new log
        queries.push({ queryString, outputMetrics, timestamp: [curTime] });
        results.save();
      }
      return results;
    });
    return next();
  },

  displayLogs(req: Request, res: Response, next: NextFunction) {
    const { userName } = res.locals;

    queriesByUser.find({ userName }, (err: Error, results: any) => {
      if (err) {
        // some sort of error
        return next({
          code: 400,
          message: 'Error with user retrieval',
          log: 'logs.addLog: Error with DB when searching for user',
        });
      }

      if (results) {
        res.locals.logs = results.queryHistory;
      }
      // if no results, just move onto next middleware
      return next();
    });

    return next();
  },

  displayLog(req: Request, res: Response, next: NextFunction) {
    const { userName } = res.locals;

    queriesByUser.find({ userName }, (err: Error, results: any) => {
      if (err) {
        // some sort of error
        return next({
          code: 400,
          message: 'Error with user retrieval',
          log: 'logs.addLog: Error with DB when searching for user',
        });
      }

      if (results) {
        const { queryHistory } = results;
        for (let i = 0; i < queryHistory.length; i += 1) {
          if (queryHistory[i]['_id'] === req.params.queryID) {
            // found the existing query, add to this
            res.locals.log = queryHistory[i];
          }
        }
      }
      // if no results, just move onto next middleware
      return results;
    });
    return next();
  },
};

export default logController;
