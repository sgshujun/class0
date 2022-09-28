window.addEventListener('load',function(){
    console.log('page is loaded');

    fetch('pokemontest.json')
    .then(Response=>Response.json())
    .then(data=>{
        let pokemonArray=data.results;
        let randomNumber=Math.floor(Math.random()*pokemonArray.length);
        let nameElement=document.getElementById('pokemon-name');
        nameElement.innerHTML=pokemonArray[randomNumber].name;
        
    
    })
   
   

    let button=document.getElementById('pokemon-button');
    button.addEventListener('click',function(){
        let inputText = document.getElementById('pokemon-input').value; 
       
        fetch('pokemontest.json')
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            let pokemonArray=data.results;
            let headingElement=document.getElementById('p-name');
            headingElement.innerHTML=pokemonArray[inputText].name;

            let imageElement=document.getElementById('p-img');
            imageElement.src=pokemonArray[inputText].url;
        })
    })

let frame=0
let gonextButton= document.getElementById('go_next');
    gonextButton.addEventListener('click',function(){
    console.log('1');
    fetch('pokemontest.json')
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            let pokemonArray=data.results;
            let imageElement=document.getElementById('imgp2');
            imageElement.src=pokemonArray[frame].url;
        })
    frame=(frame+1)%12;
  })

})