//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vishal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//------------------------------------------------------------------------------------------


// Stack (primitive)  ,Heap (Non-Primitive)


let myName="vishal"

let anotherName=myName
anotherName="kashii"

console.log(myName);
console.log(anotherName);


let userOne ={
    email:"vishal@123.com",
    upi:"vish@bl"
}

let userTwo=userOne

userTwo.email="kashii@123"

console.log(userOne.email);
console.log(userTwo.email);
