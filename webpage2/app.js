let countResult = 100;
let bgColours=["#ffffff","#000000"]
let choice=0;


window.addEventListener("load", function() {
  document.body.style.background="#000000";
  console.log("hello the page has really loaded!!");
  
  let buttonObject = document.getElementById('add-button');
  buttonObject.addEventListener("click", function() {
    countResult -= 1; 
    console.log(countResult);
    document.getElementById("result").innerHTML = countResult;
  })
  let colorButton= document.getElementById('color-button');
  colorButton.addEventListener('click',function(){
    console.log('color changes');
    document.body.style.background=bgColours[choice];
    choice=(choice+1)%2;
  })

  
});

