const buttons=document.querySelectorAll('.button');

const body =document.querySelector("body");

buttons.forEach(function (button){
    button.addEventListener('click' , function (e){
        console.log(e);
        console.log(e.target); // gives all property / or all imformation

        if(e.target.id === 'greenyellow'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id === 'pink'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id === 'violet'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
        }

    });
});