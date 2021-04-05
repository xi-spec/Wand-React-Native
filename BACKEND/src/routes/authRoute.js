const { Router } = require('express');
const passport = require('passport');
const controller = require('../controllers/authController');

function AuthRouter() {
  const router = Router();

  router.post('/register', controller.register);

  router
    .route('/login')
    .post(
      passport.authenticate('local'),
      controller.login,
    );

  router
    .route('./logout')
    .get(controller.logout);

  return router;
}

module.exports = AuthRouter();
