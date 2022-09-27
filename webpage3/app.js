window.addEventListener('load',function(){
    console.log('page is loaded');

    fetch('pokemon.json')
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
       
        let API_URL="https://pokeapi.co/api/v2/pokemon/"+ inputText;
        fetch(API_URL)
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            let headingElement=document.getElementById('p-name');
            headingElement.innerHTML=data.name;

            let weightElement=document.getElementById('p-weight');
            weightElement.innerHTML=data.weight;

            let imageElement=document.getElementById('p-img');
            imageElement.src=data.sprites.front_Default;
        })
    })
})