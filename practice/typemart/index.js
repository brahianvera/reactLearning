"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "tote bag";
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
if (Boolean(product.preOrder)) {
    console.log("We'll send a mensage when the product is on the way");
}
var shipping = 0;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "Carrera 106 # 131 A 22 New Y";
if (Number(product.price) >= 25) {
    console.log("Free shipping for this product");
}
else {
    shipping = 5;
}
var regex = /New York/g;
var founded = shippingAddress.match(regex);
if (founded) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("product: " + product.name);
console.log("shipping Address: " + shippingAddress);
console.log("product: " + product.price);
console.log("tax total: " + taxTotal);
console.log("shipping: " + shipping);
console.log("total: " + total);
