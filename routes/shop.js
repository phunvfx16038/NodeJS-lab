const express = require("express");

const path = require("path");
const rootDir = require("../ulti/path");
const adminProduct = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminProduct.product;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    addProductCSS: true,
  });
});

module.exports = router;
