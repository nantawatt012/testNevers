module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING
      }
    },
    { underscored: true }
  );
  Product.associate = (db) => {
    Product.hasMany(
      db.OrderHis,
      { foreignKey: { name: "productId" }, allowNull: false },
      { onDelete: "RESTRICT" }
    );
  };
  return Product;
};
