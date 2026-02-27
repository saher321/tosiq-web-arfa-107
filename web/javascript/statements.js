function checkNumber(){
    var num = Number(document.getElementById("number").value);

    var res = document.getElementById("result");

    if(num > 0){ // true
        res.innerText = `${num} is positive number`;
    } else { //false
        res.innerText = `${num} is negative number`;
    }
}