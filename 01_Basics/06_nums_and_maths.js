//--------------------------numbers---------------------------------------
const score =400                           //It can store number,string ,booleen
// console.log(score);

const balance =new Number(100)             // now it only store number
// console.log(balance);

// console.log(balance.toString().length);          // 1st convert to string then length 3
// console.log(balance.toFixed(2));                 //want decimal    100.00

const otherNumber=123.8966

// console.log(otherNumber.toPrecision(4));        //123.9

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'));  //Indian style  10,00,000 




//-----------------------MATHS--------------------------------------------------------------------

// console.log(Math);
// console.log(Math.abs(-6));               //6
// console.log(Math.round(8.5));            //8
// console.log(Math.ceil(4.2));             // takes uper value 5
// console.log(Math.floor(4.9));            // takes  lower value 4

// console.log(Math.min(4,3,6,8));          //3
// console.log(Math.max(4,3,6,8));           //8


// console.log(Math.random());                // always give value b/w 0 and 1
// console.log((Math.random()*10)+1);         // give value from 1.0000384 to 9.66378339
// console.log(Math.floor((Math.random()*10))+1);  //give value from 1 to 9

const min =10
const max=20

// console.log(Math.floor(Math.random() * (max-min+1))+min);   // value b/w 10 to 20 
