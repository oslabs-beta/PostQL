import { db } from './db';

const controller = {
  // check if username exists, throwing error based on request parameter
  doesUsernameExist(req: Request, res: Response, next): any {
    const { username } = req.body;
    const connectionString = `SELECT u.username FROM users u WHERE u.username='${username}'`;

    db.query(connectionString, (err: Error, response) => {
      if (err) {
        return next({
          code: 500,
          message: 'Error connecting to server.',
          log: 'auth.doesUsernameExist: Failed to make query to database',
        });
      }


      return next();
    });
    // OUTSIDE OF QUERY
  },
  createUser(req: Request, res: Response, next): any {

  },
  checkLogin(req: Request, res: Response, next): any {

  },
  createSession(req: Request, res: Response, next: Next): any {

  },
  invalidateSession(req: Request, res: Response, next: Next): any {

  },
  checkSession(req: Request, res: Response, next: Next): any {

  },
};

export { controller };
