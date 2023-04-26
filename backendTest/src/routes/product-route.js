const express = require("express");

const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/allProduct", productController.allProduct);

module.exports = router;
