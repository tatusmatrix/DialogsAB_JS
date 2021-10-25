const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

// for ( ; ; )

for (let i = 0, len = cars.length ; i < len && i < 2; i++) {
  console.log(i);
  text += cars[i] + "<br>";
  // text = text + cars[i] + "<br>";
  // i++ -> i += 1 -> i = i + 1
}

// console.log(i);

document.getElementById("demo").innerHTML = text;
