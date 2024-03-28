const user ={
    username : "vishal",
    price : "50",

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="xyz"

//     console.log(this.username);   // undefined  this is used for objects not in function
    
// }

// chai()                 // undefined  this is used for objects not in function


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()        // undefined  this is used for objects not in function


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai() 



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }                                            //explicit return

// const addTwo = (num1, num2) =>  num1 + num2    //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )     //implicit return

const addTwo = (num1, num2) => ({username: "hitesh"})         //retun object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
