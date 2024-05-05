const coding =["js","ruby","java","python","cpp"]

coding.forEach( function (item){
    // console.log(item);                               //CALLBACK FUNCTION
})

coding.forEach( (item) =>{  
    //  console.log(item);                             //CALLBACL ARROW FUNCTION    
})


coding.forEach((item,index,arr)=>{
    //  console.log(item,index,arr);
})


//   OBJECTS INSIDE ARRAY


const myCoding =[
    {
        languageName: "javascript",
        languageFileName:"js",
    },
    {
        languageName: "c++",
        languageFileName:"cpp",
    },
    {
        languageName: "python",
        languageFileName:"py",
    },

]

myCoding.forEach( (item) => {
    //   console.log(item);
    //   console.log(item.languageName);
    //   console.log(item.languageFileName);
})


 


