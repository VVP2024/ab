const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) 
{
 // text += x.valueOf + "<br>";
  text += x + "<br>";
}

document.getElementById("demo1").innerHTML = text;

text = "";
for (let i = 0; i < cars.length; i++) 
{
    text += cars[i] + "<br>";
}

document.getElementById("demo2").innerHTML = text;

text = "";
for (let [i,x] of cars.entries()) 
{
 // text += x.valueOf + "<br>";
  text += i +" " + x  + " " + "<br>";
}

document.getElementById("demo").innerHTML = text;
