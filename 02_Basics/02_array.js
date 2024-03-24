const marvel_heros=["thor" ,"tronman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)   //[ 'thor', 'tronman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] taking 2nd array as element

//console.log(marvel_heros);
// console.log(marvel_heros[2]);
// console.log(marvel_heros[3][1]);

// concat  --> add two array and create new array without  modifing original array

const All_heros=marvel_heros.concat(dc_heros)     //  [ 'thor', 'tronman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(All_heros);

//spread --> like concat  .we use spread more than concat

const All_new_heros=[...marvel_heros,...dc_heros]    //  [ 'thor', 'tronman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(All_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,8]]]

const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("vishal"));
// console.log(Array.from("vishal"));
// console.log(Array.from({name:"vishal"}));  


let score1=100
let score2=200
let score3=300


console.log(Array.of(score1,score2,score3));

