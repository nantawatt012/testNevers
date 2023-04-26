const { OrderHis, Order } = require("../models");

exports.getOrders = async (req, res, next) => {
  try {
    const userid = req.user.id;
    const allOrders = await OrderHis.findAll({
      where: {
        userId: userid
      }
    });
    res.status(200).json(allOrders);
  } catch (err) {}
};

exports.createOrder = async (req, res, next) => {
  try {
    const productList = req.body;
    // productList haveto consist with array of productId amount
    const userid = req.user.id;

    await Order.create({ userId: req.user.id });

    const lastId = await Order.findOne({
      attributes: ["id"],
      order: [["id", "DESC"]]
    });
    // console.log(lastId.id);

    for (let i = 0; i < productList.length; i++) {
      productList[i]["userId"] = userid;
      productList[i]["orderId"] = lastId.id;
    }
    console.log(productList);
    await OrderHis.bulkCreate(productList);

    res.status(200).json("pass");
  } catch (err) {
    next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    // deleteOrder by sent req of orderId
    const deleteOrder = req.body;
    const delOrderId = await OrderHis.findAll({
      where: { orderId: deleteOrder.orderId }
    });

    const arrDeleId = delOrderId.map((el) => {
      return el.id;
    });
    console.log(arrDeleId);
    await Order.destroy({ where: { id: deleteOrder.orderId } });
    await OrderHis.destroy({ where: { id: arrDeleId } });
    res.status(200).json("pass");
  } catch (err) {}
};
