const express = require("express");

const rootDir = require("../ulti/path");

const path = require("path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.productName);
  products.push({ title: req.body.productName });
  res.redirect("/");
});

exports.product = products;
exports.route = router;
