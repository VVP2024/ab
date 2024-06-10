let now = c(); 
let a = 5;
let b = 6;
let c = a + b;

now.set(now.getHours() + time_shift);

document.getElementById("demo1").innerHTML = c;