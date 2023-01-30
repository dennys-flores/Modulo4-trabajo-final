const Shopping = require("../models/ShoppingCart");
const catchAsync = require("../utils/catchAsync");

const getAllShoppingcart = async (req, res) => {
  const shoppingcart = await Shopping.find();
  res.status(200).json({
    status: "ok",
    data: shoppingcart,
  });
};

const getShoppingByUser = async (req, res) => {
  console.log("parametros id:", req.user.id);
  const shopping = await Shopping.findOne({
    user: req.user.id,
    status: "PENDING",
  });
  console.log("ProductShopping", shopping);
  res.status(200).json({
    status: `Success`,
    data: shopping,
  });
};

const addShopping = catchAsync( async (req, res) => {
  let { products } = req.body;
  let user = req.user.id;
  if (!user || !products) {
    throw new Error("Please provide complete information");
  }
  //verifica si el usuario tiene existe un carrito de compras
  const shopping = await Shopping.findOne({ user, status: "PENDING" });
  console.log("shopping find:", shopping);
  if (shopping != null) {
    products.forEach((element) => {
      shopping.products.push(element);
    });
    shopping.totalAmount = shopping.products.length;
    let updateShopping = await Shopping.findByIdAndUpdate(
      shopping.id,
      shopping
    );
    console.log("Shopping update:", updateShopping);
    res.status(200).json({
      status: `Success`,
      data: shopping,
    });
  } else {
    let newShopping = new Shopping();
    newShopping.invoiceNumber = Math.floor(Math.random() * 100) + 1;
    newShopping.status = "PENDING";
    newShopping.totalAmount = products.length;
    newShopping.user = user;
    newShopping.products = products;
    newShopping = await newShopping.save();
    console.log(newShopping);
    res.status(200).json({
      status: "ok",
      dataInserted: newShopping,
    });
  }
});

const payShoppingcart =catchAsync( async (req, res) => {
  let user = req.user.id;
  const payshoppingcart = await Shopping.findOne({
    user,
    status: "PENDING",
  });
  if (payshoppingcart == null) {
    throw new Error("Not found shopping card, PENDING");
  }

  if (payshoppingcart.products.length > 0) {
    payshoppingcart.status = "PAID";
  } else {
    throw new Error("Shopping card, products lenth null");
  }
  const shoppingcartUpdate = await Shopping.findByIdAndUpdate(
    payshoppingcart.id,
    payshoppingcart
  );

  console.log("Shopping", shoppingcartUpdate);
  res.status(200).json({
    status: `Success`,
    data: payshoppingcart,
  });
});

const deleteShopping = catchAsync(async (req, res) => {
  let  productId  = req.params.id;
  let user = req.user.id;
  const shoppingDelete = await Shopping.findOne({ user, status: "PENDING" });

  if (shoppingDelete == null) {
    throw new Error("Not found shopping card");
  }
  let aux = false;
  for (var i = 0; i < shoppingDelete.products.length; i++) {
    
    if (shoppingDelete.products[i].productId == productId) {
      var spliced = shoppingDelete.products.splice(i, 1);
      console.log("Removed: " + spliced);
      aux=true;
    } 
  }
  if (aux) {
    const shoppingcartUpdate = await Shopping.findByIdAndUpdate(
      shoppingDelete.id,
      shoppingDelete
    );
    console.log("Shopping", shoppingcartUpdate);
    res.status(200).json({
      status: `Success`,
      data: shoppingDelete,
    });
  } else {
    throw new Error("Not found Product");
  }
});

module.exports = {
  getAllShoppingcart,
  addShopping,
  getShoppingByUser,
  payShoppingcart,
  deleteShopping
};
