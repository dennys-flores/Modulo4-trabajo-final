const express = require("express");
const ShoppingRouter = express.Router();
const {
  getAllShoppingcart,
  addShopping,
  getShoppingByUser,
  payShoppingcart,
  deleteShopping,
} = require("../controllers/Shopping");
const { protect } = require("../controllers/Auth");

//all shopping cards
ShoppingRouter.route("/")
.all(protect)
.get(getAllShoppingcart);

//shopping card by user
ShoppingRouter.route("/user")
.all(protect)
.get(getShoppingByUser);

ShoppingRouter.route("/product/")
.all(protect)
.post(addShopping);

ShoppingRouter.route("/product/:id")
.all(protect)
.delete(deleteShopping);

ShoppingRouter.route("/pay/")
.all(protect)
.post(payShoppingcart);

module.exports = ShoppingRouter;
