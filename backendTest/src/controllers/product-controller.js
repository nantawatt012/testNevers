const { Product } = require("../models");
const createError = require("../utils/create-error");

exports.allProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    if (products.length == 0) {
      createError("Don't have product.", 400);
    }
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};
