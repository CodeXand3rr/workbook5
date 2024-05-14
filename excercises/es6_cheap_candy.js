"use strict"

let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Peanut M&Ms", price: 2.89}, 
    {product: "Swedish Fish", price: 3.79}, 
    {product: "Reese's Peanut Butter Cups", price: 6.99},
    {product: "Skittles", price: 2.69},
    {product: "Jelly Beans", price: 3.79},
    {product: "Kit Kat", price: 2.49},
    {product: "Snickers", price: 1.79},
    {product: "Sour Patch Kids", price: 3.49},
    // TODO:  fill the array with 10 candies of various 
    //        price ranges 
 ];


 let productCost = products.filter((product) => product.price <= 4).forEach (product => console.log(product.product +product.price)  )
    console.log(productName);

    // created a variable for the array called product, filtering the product 
    let candyMM = products.filter((item) => item.product.indexOf("M&Ms")!=-1)

    console.log(candyMM);