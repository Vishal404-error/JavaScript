const name="vishal"                               //decleration 1
const repoCount=50

// console.log(name + repoCount + " value");   not recommended

// console.log(`my name is vishal ${name} and my repo count is ${repoCount}`);   // string Interpolation

// Decleration 2 as object stored as key value pair

const gameName =new String(`vishal`) 
// console.log(gameName);                            // vishal

// console.log(gameName[0]);                         //  v
// console.log(gameName.__proto__);                  // {}

// many methods available

// console.log(gameName.length);                   // length of string 6
// console.log(gameName.toUpperCase());            // VISHAL
// console.log(gameName.charAt(2));                // s
// console.log(gameName.indexOf('h'));             // 3

const newString =gameName.substring(0,5)           // visha
// console.log(newString);

const anotherString= gameName.slice(-8,4)          //  vishal -->  IT takes negative value
// console.log(anotherString);

const string1="    vishal    "
// console.log(string1.trim());                      //   vishal --> Ignore whitespaces


const url = "https:/vishal.com/vishal%20singh"
// console.log(url.replace('%20','-'));               //     https:/vishal.com/vishal-singh

// console.log(url.includes('vishal'));               //     true