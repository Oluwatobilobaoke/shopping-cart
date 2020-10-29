const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include the product name"],
    },
    price: {
        type: String,
        required: [true, "Please include the product price"],
    },
    image: {
        type: String,
        required: [true, "Please include the product image"],
    },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;