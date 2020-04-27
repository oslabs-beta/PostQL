/* eslint-disable no-underscore-dangle */
import { NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

interface TestingController {
  findAllTypes(req: Request, res: Response, next: NextFunction): any;
}

const testingController: TestingController = {
  findAllTypes(req: Request, res: Response, next: NextFunction) {
    return next();
  },
};

export default testingController;
