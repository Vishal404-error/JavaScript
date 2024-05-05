const myObject ={
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by appele"
}

for (const key in myObject) {
    console.log(`${key} value is ${myObject[key]}`);      // FORIN LOOP IS USED TO ACCECS OBJECTS KEY VALUE
}


const name =["v","i","s","h","l"]
for (const key in  name){
     console.log(key ,"value is " ,name[key]);
}