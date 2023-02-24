const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const getAllProducts = async (req, res) => {
  res.send('getAllProducts');
};

const createProduct = async (req, res) => {
  res.send('createProduct');
};

module.exports = {
  getAllProducts,
  createProduct,
};
