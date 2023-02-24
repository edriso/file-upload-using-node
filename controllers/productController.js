const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const getAllProducts = async (req, res) => {
  res.send('getAllProducts');
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

module.exports = {
  getAllProducts,
  createProduct,
};
