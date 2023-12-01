
function appendOperation(operation){

     document.getElementById("screen").innerHTML += operation;

}

 function calculateResult(){
    let container = document.getElementById("screen");

     let result = eval(container.innerHTML);
    container.innerHTML= result;
 }


  function deleteItem(){

    let container = document.getElementById("screen");

     if(container.innerHTML.endsWith(' ')){
        container.innerHTML=  container.innerHTML.slice(0,-3);

     }else{
        container.innerHTML=  container.innerHTML.slice(0,-1);
     }

  container.innerHTML=  container.innerHTML.slice(0,-1);

 }


  function info(infromation){

    let info = document.getElementById("screen").innerHTML += "© Devoleped by Eid Aden";

    
  }


  function clearAll(){
   let container = document.getElementById("screen");

   container.innerHTML=  container.innerHTML.slice(0,-100)
  }
  