function myname(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
}

//myname()

// function addTwoNumbers(num1,num2){
//      console.log(num1 + num2);
// }

// addTwoNumbers(3,4)


function addTwoNumbers(num1,num2){
    return num1 + num2
}

const result = addTwoNumbers(3,5)

//console.log("result ",result);


function loginuserMessage(userName){

    if(userName===undefined){
        console.log("please enter user name");
        return
    }
    return `${userName} just logged in`
}

console.log(loginuserMessage("vishal"));
console.log(loginuserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "vishal",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



