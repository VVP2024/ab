//if (nosacijums){darbibas;}


let now = new Date();
let hour_x = 20;
let moorning = 20;
let day = 12;
let night_a = 22;
let night_b = 4;
let time_shift = -20;

//now = now + time_shift;
now.setHours(now.getHours() + time_shift);

console.log(now);
console.log(typeof(now));

console.log(now.getHours());
console.log(typeof(now.getHours()));

console.log(now.getHours() < hour_x);
console.log(typeof(now.getHours() < hour_x));

if (now.getHours() > night_b && now.getHours() < moorning) {
  document.getElementById("demo").innerHTML = "Good morning!";
}

if (now.getHours() > moorning && now.getHours() < moorning) {
    document.getElementById("demo").innerHTML = "Good moorning!";
  }
  if (now.getHours() > day && now.getHours() < day) {
    document.getElementById("demo").innerHTML = "Good day!";
  }
  
  if (now.getHours() > night_a || now.getHours() < night_b) {
    document.getElementById("demo").innerHTML = "Good night!";
  }
