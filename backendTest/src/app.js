// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

////////////////////////////////////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routes/auth-route");
const profileRoute = require("./routes/profile-route");
const productRoute = require("./routes/product-route");
const orderRoute = require("./routes/order-route");

const authenticateMiddleware = require("../src/middlewares/authenticate");
const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");
const authenticateUser = require("./middlewares/authenticate");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/profile", authenticateMiddleware, profileRoute);
app.use("/product", productRoute);
app.use("/order", authenticateMiddleware, orderRoute);

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server run on port: ${port}`));
