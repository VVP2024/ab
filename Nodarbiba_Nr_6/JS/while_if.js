let text = "";
let i = 0;


console.log("i = "+i);
console.log(i < 10);
console.log("text = "+text);

while (i < 10) {
  text += "<br>The number is " + i;
  i++;

let j = 0;
  while (j < 5)
    
    {
 if (j == 2 ) {j = j + 0.5;continue};

 if (j == 3 ) {break};

console.log("j = "+j);
   j = j + 0.5; 
}


      //if (i==7) {continue};

  //if (i==7) {break};

  console.log("j = "+j);
  console.log("i = "+i);
  console.log(i < 10);
console.log("text = "+text);


}
document.getElementById("demo").innerHTML = text;