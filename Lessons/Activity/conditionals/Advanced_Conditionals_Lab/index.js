// Part 1: Item Price and Discounts
let price = prompt("Enter the item price: ");
let priceAfterDiscount;
let discount;
if (price >= 100) {
    priceAfterDiscount = price * 0.75;
    discount = price - priceAfterDiscount;
} else if (price >= 75) {
    priceAfterDiscount = price * 0.85;
    discount = price - priceAfterDiscount;
} else if (price >= 50) {
    priceAfterDiscount = price * 0.9;
    discount = price - priceAfterDiscount;
} else{
    priceAfterDiscount = price
    discount = price - priceAfterDiscount;
}
// console.log(`Your total is $${priceAfterDiscount}`);
// console.log(`You saved $${discount}`);

// Part 2: Sales Tax
let salesTax = 0.08;
let tax = salesTax * priceAfterDiscount ;
let subTotal = priceAfterDiscount + tax;
// console.log(`Your subtotal with tax is $${subTotal}`);

// Part 3: Shipping Fee
let shippingFee;
if (subTotal >= 100){
    shippingFee = 0;
}else if (subTotal >= 50){
    shippingFee = 10;
}else{
    shippingFee = 20;
}
let total = subTotal + shippingFee;
// console.log(`Your total shipping fee is $${shippingFee}`);
// console.log(`Your total is $${total}`);

// Part 4: Free Gift
let gift;
if (price >= 120){
    gift = true;
}else{
    gift = false;
}

// Part 5: Display the Receipt
console.log(`Item price: $${price}`);
console.log(`Descount applied: $${discount}`);
console.log(`Price after Discount: $${priceAfterDiscount}`);
console.log(`Tax amount: $${tax}`);
console.log(`subtotal: $${subTotal}`);
console.log(`shipping cost: $${shippingFee}`);
console.log(`Final total: $${total}`);
if (gift){
    console.log("free gift!");
}else{
}