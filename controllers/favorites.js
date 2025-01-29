var express = require("express");
var glob = require("glob");
var fs = require("fs");
var Favorite = require("../models/favorite");
var Product = require("../models/product");

var router = express.Router();

// Return all favorites
router.get("/api/favorites", function (req, res, next) {
  Favorite.find()
    .then((favorites) => {
      res.json({ favorites: favorites });
    })
    .catch((err) => {
      return next(err);
    });
});

// Add a product to favorites
router.post("/api/favorites", function (req, res, next) {
  const { productId } = req.body;
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required." });
  }

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }

      return Favorite.findOneAndUpdate(
        { productId },
        { productId },
        { upsert: true, new: true }
      );
    })
    .then((favorite) => {
      return res.status(200).json(favorite);
    })
    .catch((err) => {
      return next(err);
    });
});

// remove a product from favorites
router.delete("/api/favorites/:id", function (req, res, next) {
  const productId = req.params.id;
  Favorite.findOneAndDelete({ productId })
    .then((favorite) => {
      if (!favorite) {
        return res.status(404).json({ message: "Favorite item not found" });
      }
      return res.status(204).json();
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
