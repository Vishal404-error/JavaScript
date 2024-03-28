// immediately invoked function expression (IIFE)

// ()();                                            SYNTAX


(function chai(){
    console.log(`DB CONNECTED`);
})();


// ARROW FUNCTION WITH IIFE

( () =>{
    console.log(`DB CONNECTED TWO`);
})();




( (name)=>{
    
    console.log(`DB three  ${name}`);
})("vishal");