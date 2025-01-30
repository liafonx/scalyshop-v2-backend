var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
  productId: { type: String },
});

module.exports = mongoose.model("favorites", favoriteSchema);
