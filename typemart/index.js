"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '20 Jefferson Street, New York, NY';
let productName = 'Tote bag';
const filerProducts = products_1.default.filter(product => product.name.toLowerCase() === productName.toLowerCase());
let product;
if (filerProducts.length <= 0) {
    console.log('Product not found.');
}
else {
    product = filerProducts[0];
    console.log(product);
    if (product.preOrder === 'true') {
        console.log('You will be notified when your order is on the way.');
    }
    if (Number(product.price) > 25) {
        shipping = 0;
        console.log('This item is eligible for free shipping.');
    }
    else {
        shipping = 5;
    }
    if (shippingAddress.match('New York')) {
        taxPercent = 0.1;
    }
    else {
        taxPercent = 0.05;
    }
    taxTotal = Number(product.price) * taxPercent;
    total = Number(product.price) + taxTotal + shipping;
    console.log(productName);
    console.log(shippingAddress);
    console.log(product.price);
    console.log(taxTotal);
    console.log(shipping);
    console.log(total);
}
