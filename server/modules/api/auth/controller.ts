import bcrypt, { hash } from 'bcrypt';
import { db } from './db';

interface AuthController {
  validateFields(req: Request, res: Response, next: any): any;
  doesUsernameExist(req: Request, res: Response, next): any;
  checkLogin(req: Request, res: Response, next: any): any;
  createUser(req: Request, res: Response, next: any): any;
  doesEmailExist(req: Request, res: Response, next: any): any;
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

    if (!username || username.length === 0) {
      return next({
        code: type === AuthTypes.LOGIN ? 412 : 403,
        message: 'Username is required.',
        log: 'auth.validateFields: User attempted to make request without username.',
      });
    }

    if (!password || password.length === 0) {
      return next({
        code: type === AuthTypes.LOGIN ? 412 : 403,
        message: 'Password is required.',
        log: 'auth.validateFields: User attempted to make request without password.',
      });
    }

    // only check email if user is registering, otherwise skip
    if ((!email || email.length === 0) && type === AuthTypes.REGISTER) {
      return next({
        code: 403,
        message: 'Email is required.',
        log: 'auth.validateFields: User attempted to make request without email.',
      });
    }

    return next();
  },
  doesUsernameExist(req: Request, res: Response, next: any) {
    const { username, type } = req.body;
    const query = `SELECT u.username FROM users u WHERE u.username='${username}'`;

    db.query(query, (err: Error, response) => {
      if (err) {
        console.log(err);
        return next({
          code: 500,
          message: 'Error connecting to server.',
          log: 'auth.doesUsernameExist: Failed to make query to database',
        });
      }

      const usernameExists = response.rows[0] !== undefined;
      if (!usernameExists && type === AuthTypes.LOGIN) {
        return next({
          code: 403,
          message: 'Username and/ or password incorrect.',
          log: 'auth.doesUsernameExist: User attempted to log in with invalid username.',
        });
      }

      if (usernameExists && type === AuthTypes.REGISTER) {
        return next({
          code: 409,
          message: 'Username is taken.',
          log: 'auth.doesUsernameExist: User attempted to register with username that is already in use.',
        });
      }


      return next();
    });
    // OUTSIDE OF QUERY
  },
  doesEmailExist(req: Request, res: Response, next: any) {
    const { email, type } = req.body;
    const query = `SELECT u.email FROM users u WHERE u.email='${email}'`;

    db.query(query, (err, response) => {
      if (err) {
        return next({
          code: 500,
          message: 'Error connecting to server.',
          log: 'auth.doesEmailExist: Failed to make query to database',
        });
      }

      const emailExists = response.rows[0] !== undefined;
      if (emailExists && type === AuthTypes.REGISTER) {
        return next({
          code: 409,
          message: 'Email is linked to another account.',
          log: 'auth.doesEmailExist: User attempted to register with email already in use',
        });
      }

      return next();
    });
    // OUTSIDE QUERY
  },
  createUser(req: Request, res: Response, next: any) {
    const { username, password, email } = req.body;

    bcrypt.hash(password, 11, (err, hashedPassword) => {
      if (err) {
        return next({
          code: 500,
          message: 'Error connecting to server.',
          log: 'auth.createUser: Errored when hashing password with bcrypt.',
        });
      }

      const query = `INSERT INTO user u (username, password, email) VALUES ('${username}','${hashedPassword}','${email}')`;
    });
    // OUTSIDE BCRYPT HASH
  },
  checkLogin(req: Request, res: Response, next: any) {
    const { username, password } = req.body;
    const query = `SELECT u.password FROM users u WHERE u.username='${username}' OR u.email='${username}'`;

    db.query(query, (err: Error, response) => {
      if (err) {
        return next({
          code: 500,
          message: 'Error connecting to server.',
          log: 'auth.checkLogin: Failed to make query to database',
        });
      }

      const hashedPassword = response.rows[0].password;
      bcrypt.compare(password, hashedPassword, (err, result) => {
        if (err) {
          return next({
            code: 500,
            message: 'Error connecting to server.',
            log: 'auth.checkLogin: Errored when comparing passwords.',
          });
        }

        if (!result) {
          return next({
            code: 403,
            message: 'Username and/ or password incorrect.',
            log: 'auth.checkLogin: User passed incorrect password.',
          });
        }

        return next();
      });
    });
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
