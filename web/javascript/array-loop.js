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

const colors = ["White", "Red", "Black"];

console.table(colors)
console.table(colors.length)

colors.push("Pink");

console.log("After push: ", colors);

colors.unshift("Gray");

console.log("After unshift: ", colors);

console.log(colors.sort());

// target index, mode(0 -> replace, 1 -> delete), value
colors.splice(2, 1, "Purple");
console.log("After splice: ", colors);