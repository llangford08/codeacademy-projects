import products, { TProduct } from './products';

let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;
let shippingAddress : string = '20 Jefferson Street, New York, NY';

let productName : string = 'Tote bag';

const filerProducts = products.filter(product => product.name.toLowerCase() === productName.toLowerCase());
let product :  TProduct;
if (filerProducts.length <= 0) {
  console.log('Product not found.');
} else {
  product = filerProducts[0];console.log(product);

  if (product.preOrder === 'true') {
    console.log('You will be notified when your order is on the way.');
  }



  if (Number(product.price) > 25) {
    shipping = 0;
    console.log ('This item is eligible for free shipping.');
  } else {
    shipping = 5;
  }

  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
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



