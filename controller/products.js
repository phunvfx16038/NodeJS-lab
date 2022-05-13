const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/add-product",
    activeAddProduct: true,
    formCSS: true,
    addProductCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.productName);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      hasProduct: products.length > 0,
      activeShop: true,
      addProductCSS: true,
    });
  });
};
