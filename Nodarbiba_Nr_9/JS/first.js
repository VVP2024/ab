/*
var counter = 1;
var showCounter = () => console.log(counter);

console.log(window.counter);
window.showCounter();

window.open('https://rtu.lv' , "rtu");
*/

console.log(window.innerHeight);
window.innerHeight = 50;
console.log(window.innerHeight);

console.log(window.innerWidth);
window.innerWidth = 10;
console.log(window.innerWidth);

/*
window.open('http://127.0.0.1:9222/Nodarbiba_Nr_8/index.html');
window.open('https://rtu.lv' , "rtu");
window.focus('http://127.0.0.1:9222/Nodarbiba_Nr_8/index.html');
Window.close ('http://127.0.0.1:9222/Nodarbiba_Nr_8/index.html');
*/

let jsWindow = window.open(
    //"https://rtu.lv",
    "http://127.0.0.1:9222/Nodarbiba_Nr_08/index.html",
    //"RTU",
    "NR08",
    'height=600,width=800');

setTimeout(() => {
    jsWindow.resizeTo(600, 300);
}, 3000);

setTimeout(() => {
    jsWindow.close();
}, 6000);