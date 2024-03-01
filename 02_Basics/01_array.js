// Array


const myArr =[0,1,2,3,4,5]
console.log(typeof myArr);
const myHeros =["abc","xyz","pqr"]
const mix =[1,2,3,true,"vishal"]

const myArr2 =new Array(1,2,3,4)
// console.log(myArr[1]);


// ARRAY METHODS

myArr.push(6)            // push element at last index
// console.log(myArr);

myArr.pop()
// console.log(myArr);     // pop last element from array

myArr.unshift(88)       // adding element at 1st pos
// console.log(myArr);

myArr.shift()          // remove 1st element
// console.log(myArr);

// console.log(myArr.includes(22)); //checks 22 is in array or not return boolean
// console.log(myArr.indexOf(4));   // return index of element 4 otherwise -1


const newArr =myArr.join()
// console.log(newArr);          // join array and convert into string
// console.log(typeof newArr);





// slice   , splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   
console.log("c ", myArr);
console.log(myn2);


//  slice() extracts elements into a new array without modifying the original. 
//  splice() changes the contents of the original array. 

