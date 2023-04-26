const express = require("express");

const orderController = require("../controllers/order-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/getOrders", authenticate, orderController.getOrders);
router.post("/createOrder", authenticate, orderController.createOrder);
router.delete("/deleteOrder", authenticate, orderController.deleteOrder);

module.exports = router;
