module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      IsDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validator: {
          notEmpty: true
        },
        defaultValue: false
      }
    },
    { underscored: true }
  );
  Order.associate = (db) => {
    Order.belongsTo(
      db.User,
      {
        foreignKey: { name: "userId" },
        allowNull: false
      },
      {
        onDelete: "RESTRICT"
      }
    );

    Order.hasMany(
      db.OrderHis,
      {
        foreignKey: { name: "orderId" },
        allowNull: false
      },
      {
        onDelete: "RESTRICT"
      }
    );
  };
  return Order;
};
