


function factorial() {
    var numberAsString = document.getElementById('number').value;
    number = parseInt(numberAsString);
    let answer = 1;
    if (number == 0 || number == 1) {
        document.getElementById("loop").innerHTML =
            number + " " + number + " " + answer;

    } else if (isNaN(number)) {
        document.getElementById("loop").innerHTML = "Please enter number and try again 🤔";
    }
    else {
        for (var i = number; i >= 1; i--) {
            answer = answer * i;
        }
        document.getElementById("loop").innerHTML =
            number + " " + number * number + " " + answer + "<br>";
    }
}