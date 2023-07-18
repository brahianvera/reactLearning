import products from './products';
let productName = "tote bag";
let product = products.filter(product => product.name === productName)[0];
if(Boolean(product.preOrder)){
  console.log("We'll send a mensage when the product is on the way");
}

let shipping = 0;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress = "Carrera 106 # 131 A 22 New Y";

if(Number(product.price) >= 25){
  console.log("Free shipping for this product")
}else{
  shipping = 5;
}

let regex = /New York/g;
const founded = shippingAddress.match(regex);
if(founded){
  taxPercent = 0.1;
}else{
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log("product: "+product.name);
console.log("shipping Address: "+shippingAddress);
console.log("product: "+product.price);
console.log("tax total: "+taxTotal);
console.log("shipping: "+shipping);
console.log("total: "+total);
