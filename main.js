
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function doGameEvents(){

  //every step, small chance of a little ship appearning
  if(Math.random()<0.005){
    makeDefaultShip();
  }

  //first wave at 20 seconds
  //make 10 default ships
  if(gameTime == 20*20){
    console.log("first wave");
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }
  if(gameTime == 23*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }

  //second wave at 55 seconds
  //make 12 default ships and 2 big ships
  if(gameTime == 55*20){
    console.log("second wave");
    for(var i = 0; i < 6; i++){
      makeDefaultShip();
    }
    makeBigShip();
  }
  if(gameTime == 60*20){
    for(var i = 0; i < 6; i++){
      makeDefaultShip();
    }
    makeBigShip();
  }

  //third wave at 90 seconds
  //make 10 default ships, 5 big ships
  if(gameTime == 90*20){
    console.log("third wave");
    for(var i = 0; i < 4; i++){
      makeBigShip();
    }
    makeDefaultShip();
  }
  if(gameTime == 96*20){
    for(var i = 0; i < 9; i++){
      makeDefaultShip();
    }
    makeBigShip();
  }

  //fourth wave at 130 seconds (not too hard)
  //make 25 default ships
  if(gameTime == 130*20){
    console.log("fourth wave");
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }
  if(gameTime == 132*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }
  if(gameTime == 134*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }
  if(gameTime == 136*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }
  if(gameTime == 138*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }

  //fifth wave at 160 seconds (easy)
  //8 default ships, 3 big ships
  if(gameTime == 160*20){
    console.log("fifth wave");
    for(var i = 0; i < 3; i++){
      makeDefaultShip();
    }
    for(var i = 0; i < 3; i++){
      makeBigShip();
    }
  }
  if(gameTime == 163*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }

  //sixth wave at 185 seconds (hard)
  //11 default ships, 4 big ships, 4 long ships
  if(gameTime == 185*20){
    console.log("sixth wave");
    for(var i = 0; i < 6; i++){
      makeDefaultShip();
    }
    for(var i = 0; i < 4; i++){
      makeBigShip();
    }
  }
  if(gameTime == 190*20){
    for(var i = 0; i < 4; i++){
      makeLongShip();
    }
  }
  if(gameTime == 196*20){
    for(var i = 0; i < 5; i++){
      makeDefaultShip();
    }
  }

  //seventh wave at 220 seconds (hard)
  //18 default ships, 8 big ships, 8 long ships
  if(gameTime == 220*20){
    console.log("seventh wave");
    for(var i = 0; i < 10; i++){
      makeDefaultShip();
    }
    for(var i = 0; i < 8; i++){
      makeBigShip();
    }
  }
  if(gameTime == 225){
    for(var i = 0; i < 8; i++){
      makeLongShip();
    }
    for(var i = 0; i < 8; i++){
      makeDefaultShip();
    }
  }

  //eighth wave at 250 seconds (hard)
  //20 default ships, 10 big ships, 10 long ships
  if(gameTime == 250*20){
    console.log("eighth wave");
    for(var i = 0; i < 10; i++){
      makeBigShip();
    }
  }
  if(gameTime == 255){
    for(var i = 0; i < 10; i++){
      makeLongShip();
    }
    for(var i = 0; i < 20; i++){
      makeDefaultShip();
    }
  }

  //ninth wave at 275 seconds (hard)
  //25 default ships, 25 big ships, 10 long ships
  if(gameTime == 275*20){
    console.log("ninth wave");
    for(var i = 0; i < 25; i++){
      makeDefaultShip();
    }
    for(var i = 0; i < 5; i++){
      makeBigShip();
    }
  }
  if(gameTime == 280*20){
    for(var i = 0; i < 20; i++){
      makeBigShip();
    }
    for(var i = 0; i < 10; i++){
      makeLongShip();
    }
  }

  //tenth wave at 310 seconds (very hard)
  //20 big ships, 25 long ships, 30 default ships
  if(gameTime == 310*20){
    console.log("tenth wave");
    for(var i = 0; i < 20; i++){
      makeBigShip();
    }
  }
  if(gameTime == 314*20){
    for(var i = 0; i < 25; i++){
      makeLongShip();
    }
  }
  if(gameTime == 315*20){
    for(var i = 0; i < 30; i++){
      makeDefaultShip();
    }
  }

  
}

async function main(){
  showPrices();
  step();
  pause();
  while(true){
    while(!paused){
      step();
      await sleep(50);
    }
    await sleep(50);
  }
}
main();
