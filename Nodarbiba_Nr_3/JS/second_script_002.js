a = 10;
console.log("a mainigais:" +a);

// tests var//
var x = 10;
    console.log("x mainigais pirms:" +x)
    
    {
    x = 200;
    console.log("x mainigais ieks un pec:" +x)
    var x = 100;
    console.log("x mainigais ieks un pec var:" +x)
    }
    console.log("x mainigais pec:" +x)
    x = 0;
    console.log("x mainigais pec:" +x)
    var x = 100000;
    console.log("x mainigais ieks un pec var:" +x)
//tests let//
    let y = 10;
    console.log("y mainigais pirms:" +y)

    { 
       //console.log("y mainigais pirms:" +y) 
    //y = 200;
    //console.log("y mainigais ieks un pec:" +y)
    let y = 100;
    console.log("y mainigais ieks un pec var:" +y)
    }
    console.log("y mainigais pec:" +y)
    y = 0;
    console.log("y mainigais pec:" +y)
    // let y = 10000; - nedrikst

    console.log("y mainigais ieks un pec var:" +y)

    //tests const//

    const k = 100;
    console.log("k mainigais pirms:" +k)
    
    {
    //k = 2000;
    //console.log("k mainigais ieks un pec:" +k)
    const k = 1000;
    console.log("k mainigais ieks un pec var:" +k)
    }
    console.log("k mainigais pec:" +k)
    //k = 0;
    console.log("k mainigais pec:" +k)
    //const x = 1000000000;
    console.log("k mainigais ieks un pec var:" +k)
    //let x = 100;
    //let y = 25;
    //let k = 666;
    var x = 111;
    //var y = 222;
    //var k = 333;
//const x = 777;
//const y = 888;
//const k = 999;
