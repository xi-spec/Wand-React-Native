const { Router } = require('express');
const { createUser, updateUser, getAllUsers } = require('../controllers/userController');

function userRouter() {
  const router = Router();

  router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

  router
    .route('/:userId')
    .put(updateUser);

  return router;
}

module.exports = userRouter();
