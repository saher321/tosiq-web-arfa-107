// ********* COMPARISON OPERATOR ********
// < :: less then
// > :: greater then
// == :: equal to
// !  :: not
// != :: not equal to
// === :: equal to, check type

// "3" == 3 :: true
// "3" === 3 :: false

// <= :: less then and equal to
// >= :: greater then and equal to
// 3 == 3 && 'ali' == 'ali'   AND
// 3 == 3 || 'ali' == 'ali'   OR 
// ***********************************

// array.map(()=>{})        => whole record     :: array
// array.filter(()=>{})     => filter record    :: array
// array.find(()=>{})       => specific record  :: object
// array.some(()=>{})       ?
// array.reduce(()=>{})     ?

var clrs = document.getElementById("colors");
const products = [
  { id: 1, name: "iPhone 15", price: 999, category: "Electronics" },
  { id: 2, name: "Samsung Galaxy S24", price: 899, category: "Electronics" },
  { id: 3, name: "Nike Air Max 270", price: 150, category: "Footwear" },
  { id: 4, name: "Adidas Ultraboost 22", price: 180, category: "Footwear" },
  { id: 5, name: "Sony WH-1000XM5 Headphones", price: 399, category: "Accessories" },
  { id: 6, name: "Dell XPS 13 Laptop", price: 1299, category: "Computers" },
  { id: 7, name: "Apple Watch Series 9", price: 399, category: "Wearables" },
  { id: 8, name: "Logitech MX Master 3S Mouse", price: 99, category: "Accessories" },
  { id: 9, name: "HP Envy 6055e Printer", price: 149, category: "Office" },
  { id: 10, name: "Canon EOS R50 Camera", price: 679, category: "Photography" }
];

let category = "Footwear";
// const filteredProducts = products.filter((elem) => elem.category == category);

const product = products.find((elem) => elem.category == category);
// console.log(product)
clrs.innerHTML += `<li>${product.name}</li>`;
// filteredProducts.map((product) => {
//     clrs.innerHTML += `<li>${product.name}</li>`;
// });

// *******************************************************

const colors = ["White", "Pink", "Pink", "Pink", "Pink", "Red", "Black"];
// 
// console.table(colors)
// console.table(colors.length)

colors.push("Pink");

// console.log("After push: ", colors);

colors.unshift("Gray");

// console.log("After unshift: ", colors);

// console.log(colors.sort());

// target index, mode(0 -> add, 1 -> delete), value
colors.splice(2, 0, "Purple");
// console.log("After splice: ", colors);



// colors.map((clr) => {
//     clrs.innerHTML += `<li>${clr}</li>`;
// });

// colors.forEach(clr => {
//     clrs.innerHTML += `<li>${clr}</li>`;
// });

let colorName = "Pink";
const filteredData = colors.filter((elem) => elem == colorName);

// filteredData.map((clr) => {
//     clrs.innerHTML += `<li>${clr}</li>`;
// });

const array1 = ["Red", "Green", "Purple"];
const array2 = [
    {name: "Item 1", category: "A"}, 
    {name: "Item 2", category: "B"}, 
    {name: "Item 3", category: "C"}
];
const array3 = ["item 56", "item 55"]
// const newArray = array1.concat(array2, array3);
const newArray = [...array1, ...array2, ...array3, "Imran"];

console.log(newArray)