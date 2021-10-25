
const abstractArray = ["Saab", "Volvo", "BMW"];
const newArray = [];
document.getElementById("array").innerHTML = abstractArray;

function addRecordToBegining() {
    var record = document.getElementById('arrRecord').value;
    document.getElementById("array").innerHTML = abstractArray;
    abstractArray.unshift(record);
    document.getElementById("newArray").innerHTML = newArrayCreation();
}

function addRecordToEnd() {
    var record = document.getElementById('arrRecord').value;
    document.getElementById("array").innerHTML = abstractArray;
    abstractArray.push(record);
    document.getElementById("newArray").innerHTML = newArrayCreation();
}

function newArrayCreation() {
    var convertedToString = abstractArray.toString();
    var tableOfArrays = "";
    newArray.push(convertedToString);
   
   for (index = 0, len = newArray.length; index < len; index++) {
        var element = newArray[index];
        console.log(element);
        tableOfArrays = tableOfArrays + element + '<br>';
    }

    return tableOfArrays;
}
