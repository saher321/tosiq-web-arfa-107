var a = "Value is ";
var b = 20;

console.log(a+b);

// x + y + z + xyz
x = 5
y = 10
z = 15

var result = x + y + z + (x*y*z);
console.log("Expression result is ", result);

// temp conversion C ===> F
// °C * 9/5 + 32
// cToF();
// function cToF(){
//     var c = 30;
//     var result = c * 9/5 + 32;
//     console.log("Temp in °F ", result);
// }


function cToF(){
    var c = document.getElementById("cel").value;

    if (!c) {
        alert("Please add celsius value");
        return;
    }

    var result = parseInt(c) * 9/5 + 32;
    // console.log("Temp in °F ", result);
    
    var f = document.getElementById("result");
    
    f.innerText = `Temp in °F ${result}`;
}