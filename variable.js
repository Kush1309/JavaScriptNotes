var name="Kushagra"; //function scope = it is only accessable in inside the function
console.log(name);

function test() {
    var x=10;
    console.log(x) //then it is correct or accessible 
}
test();
// console.log(x) //it is wring or give error

// *********************************************************

let address = "Kanpur Nagar"
console.log(address) //block scope

if (true) {
  let x = 20;
  console.log(x); // ✅ works
}

// console.log(x); //  error (x block ke bahar nahi milega)

// **********************************************************

const state = "Uttar Pradesh"  //const block scoped or cannot be reassigned
console.log(state);