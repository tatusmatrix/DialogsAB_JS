const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
  //same as bellow
  //text = text + cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;