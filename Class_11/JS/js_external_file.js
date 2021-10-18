try {
    document.getElementById("demo3").innerHTML = "Izdruka no external script, apraksts iekš fails.js";
}
catch (err) {
    alert("Kļūda no external script, apraksts iekš fails.js:\n" + err);
}