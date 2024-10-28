
function randomNumber(){
    let num = Math.floor(Math.random()*100)+1;
    console.log("Generated number is"+num);
}
 let delay = 3000;
  function countdown(seconds){
    interval = setInterval(() =>{
    if(seconds>0){
        console.log("Remaining time: "+ seconds +"seconds");
        seconds--;
    }  
    else{
        clearInterval(interval)
        randomNumber()
    }
  },1000);
}
countdown(delay/1000);