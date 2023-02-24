const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const uploadsController = require('../controllers/uploadsController');

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route('/uploads').post(uploadsController.uploadProductImage);

module.exports = router;
