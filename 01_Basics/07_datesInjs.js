// Date

let myDate=new Date()

// console.log(typeof myDate);                //object
// console.log(myDate);                     //2024-03-01T07:14:52.716Z

// console.log(myDate.toString());             // Fri Mar 01 2024 07:16:06 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString());       // Fri Mar 01 2024
//  console.log((myDate.toLocaleString()));    // 3/1/2024, 7:20:22 AM
//  console.log(myDate.toJSON());              // 2024-03-01T07:20:22.782Z


// let Date1 =new Date(2024,0,23)
// console.log(Date1.toDateString());         // Mon Jan 23 2023

// let Date2 =new Date(2024, 0,23,5,3)
// console.log(Date2.toLocaleString());           // 1/23/2024, 5:03:00 AM


// let Date3 =new Date("2024-03-14")
// console.log(Date2.toLocaleString());              //1/14/2024, 12:00:00 AM    --> time is default



 let Date3 =new Date("01-14-2024") 
//   console.log(Date3.toLocaleString())         //  1/14/2024, 12:00:00 AM


  let myTimeStamp =Date.now()

//   console.log(myTimeStamp);          // 1709278395767      milisec
//   console.log(Date3.getTime());    // give time stamp of Date3   -->   1705190400000  milisec


//   console.log(Math.floor(myTimeStamp/1000));     //  1709278547 sec
  

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})