const { Router } = require('express');
const productTypeController = require('../controllers/productTypeController');

function productTypeRouter() {
  const router = Router();

  router
    .route('/')
    .get(productTypeController.getAllProductType)
    .post(productTypeController.createProductType)
    .put(productTypeController.updatedProductType);

  router
    .route('/:typeParam')
    .get(productTypeController.getOneProductTypeByParm)
    .put(productTypeController.updatedProductType);

  return router;
}

module.exports = productTypeRouter();
