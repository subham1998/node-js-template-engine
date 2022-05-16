const path = require("path");

const router = require("express").Router();

const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res) => {
  const body = req.body;
  products.push({ title: body.title });
  console.log(body);
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
