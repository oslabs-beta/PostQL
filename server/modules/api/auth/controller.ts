import { db } from './db';

interface AuthController {
  validateFields(req: Request, res: Response, next: any): any;
}

enum AuthTypes {
  LOGIN = 'login',
  REGISTER = 'register'
}

const controller: AuthController = {
  validateFields(req: Request, res: Response, next: any) {
    const {
      username, password, email, type,
    } = req.body;

    if (!Object.values(AuthTypes).includes(type)) {
      return next({
        code: 400,
        message: 'Invalid request.',
        log: 'auth.validateFields: User attempted to make request without type.',
      });
    }

    return next();
  },
};

// const controller = {
//   validateFields(req: Request, res: Response, next): any {
//     const {
//       username, password, email, type,
//     } = req.body;

//     if (!type) {
//       return next({
//         code: 400,
//         message: 'Invalid request.',
//         log: 'auth.validateFields: User attempted to make request without type.',
//       });
//     }

//     return next();
//   },
//   doesUsernameExist(req: Request, res: Response, next): any {
//     const { username } = req.body;
//     const connectionString = `SELECT u.username FROM users u WHERE u.username='${username}'`;

//     db.query(connectionString, (err: Error, response) => {
//       if (err) {
//         return next({
//           code: 500,
//           message: 'Error connecting to server.',
//           log: 'auth.doesUsernameExist: Failed to make query to database',
//         });
//       }


//       return next();
//     });
//     // OUTSIDE OF QUERY
//   },
//   createUser(req: Request, res: Response, next): any {

//   },
//   checkLogin(req: Request, res: Response, next): any {

//   },
//   createSession(req: Request, res: Response, next: Next): any {

//   },
//   invalidateSession(req: Request, res: Response, next: Next): any {

//   },
//   checkSession(req: Request, res: Response, next: Next): any {

//   },
// };

export { controller };
