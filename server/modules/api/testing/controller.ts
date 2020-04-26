/* eslint-disable no-underscore-dangle */
import { NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import {HttpLink} from 'apollo-link-http';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import fetch from 'cross-fetch';

interface TestingController {
  findAllTypes(req: Request, res: Response, next: NextFunction): any;
  getData(req: Request, res: Response, next: NextFunction): any;
  fetchURL(req: Request, res: Response, next: NextFunction): any;
}

const testingController: TestingController = {
  fetchURL(req: Request, res: Response, next: NextFunction) {
    res.locals.url = req.body.url;
    console.log('reaching testingController.fetch', req.body.url);
    return next();
  },
  async getData(req: Request, res: Response, next: NextFunction) {
    console.log(`${res.locals.url}`);

    const link = new HttpLink({ uri: res.locals.url, fetch });

    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
      schema,
      link,
    });

    console.log(executableSchema);
    // console.log('here');rm 
    return next();
    // fetch(res.locals.url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then((res) => {
    //   console.log(`here: ${res.json()}`);
    //   // if (res.status === 200) return res.json();
    // });
    //   .then((data) => {
    //     // console.log(data);
    //     res.locals.result = data;
    //     return next();
    //   });
  },
  findAllTypes(req: Request, res: Response, next: NextFunction) {
    return next();
  },

};


export default testingController;
