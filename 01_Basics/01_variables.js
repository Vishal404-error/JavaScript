const accountId=144533
let accountEmail="vishal@google.com"
var accountpassword="12345"
accountCity="jaipur"

// accountId=2  not allowed

accountEmail="xyz@gmail.com"
accountpassword=68696
accountCity="kolkata"    //not prefer to do 
let accountState;        // only decleration

console.log(accountId);

/**
 * prefer not to use var
 * becz of issue in block scope snd functional scope
 */
console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);
