
function checkCriteria(){
    var marks = parseInt(document.getElementById("obtained").value);
    var grade = document.getElementById("grade").value;
    var output = document.getElementById("output");

    if (marks < 80) {
        output.innerText = "You are not Elegible";
        return;
    } else {
        if (grade == "a" || grade == "b") {
            output.innerText = "You are Elegible";
        } else {
            output.innerText = "You are not Elegible";
        }
    }
}