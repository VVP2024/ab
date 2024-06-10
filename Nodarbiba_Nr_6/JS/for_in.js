const person = {fname:"John", lname:"Doe", age:25}; 

console.log(person["fname"]);

let txt = "";
for (let x in person) {
    console.log(x);
  txt += person[x] + " " + "<br>" ;
}

document.getElementById("demo3").innerHTML = txt;


txt = "";
for (let x in person) {
    console.log(x);
  txt += person[x] + " " + "<br>" ;
}

document.getElementById("demo4").innerHTML = txt;