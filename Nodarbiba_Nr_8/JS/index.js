const car = {type:"Fiat", model:"500", color:"white"};

// Display Data from the Object:
document.getElementById("demo").innerHTML =
"The car type is " + car.type;

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    whoisthis: function() {
        return this;
      }
  };
  
  document.getElementById("demo").innerHTML = person.fullName();