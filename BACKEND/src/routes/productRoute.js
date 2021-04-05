const { Router } = require('express');
const productController = require('../controllers/productController');

function productRouter() {
  const router = Router();

  router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct)
    .put(productController.updatedProduct)
    .delete(productController.deleteProduct);

  router
    .route('/:productParam')
    .get(productController.getOneByParm)
    .put(productController.updatedProduct)
    .delete(productController.deleteProduct);

  return router;
}

module.exports = productRouter();
