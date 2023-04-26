module.exports = (sequelize, DataTypes) => {
  const OrderHis = sequelize.define(
    "OrderHis",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },

      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  OrderHis.associate = (db) => {
    OrderHis.belongsTo(
      db.Order,
      {
        foreignKey: { name: "orderId" },
        allowNull: false
      },
      {
        onDelete: "RESTRICT"
      }
    );

    OrderHis.belongsTo(
      db.Product,
      { foreignKey: { name: "productId" }, allowNull: false },
      {
        onDelete: "RESTRICT"
      }
    );
  };
  return OrderHis;
};
