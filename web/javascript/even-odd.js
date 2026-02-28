function checkNumber(){
    var num = Number(document.getElementById("number").value);

    var res = document.getElementById("result");

    if(num % 2 === 0){ // true
        res.innerText = `${num} is even number`;
    } else { //false
        res.innerText = `${num} is odd number`;
    }
}