// for of 

// [" "," "," "]   string
// [{},{},{}]    objects


const arr=[1,2,3,4,5]
 
for( const num of arr){
    // console.log(num);                          1 2 3 4 5
}


const greeting ="Hello world"
for(const greet of greeting){

    if(greet !=" "){
        // console.log(greet);          Helloworld
    }
}


const map =new Map()

map.set('In' ,"INDIA")
map.set('USA',"united state of america")
map.set('fr',"france")

// console.log(map);   

for (const [key,value] of map) {

    // console.log(key);    // gives key
    // console.log(value);  // gives value
    // console.log(key, '==>' ,value)
}

const myObject = {
    'game1' : 'nfs',
    'game2' : 'spiderman'

}

// for (const [key,value] of myObject) {
//     console.log(key ,'=>', value);           //NOT ITERABLE FOR OBJECTS FOROF LOOP
    
// }

// NEXT PAGE--->