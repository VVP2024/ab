const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
console.log(i);
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

console.log(text);
