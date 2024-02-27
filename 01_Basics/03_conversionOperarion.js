let score="33abc"

console.log(typeof score);

let valueInNumber=Number(score)   //--> change to String into number
console.log(typeof valueInNumber);
console.log(valueInNumber);       //but it is not number

//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0


let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
//""=>false
//"vishal" => true
