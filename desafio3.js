/**
  There are a number of tiles on the floor, each numbered with a different non-negative integer. 
  
  Treat this set of tiles as an array. You are initially standing on the first tile. 
  
  Each tile in the set represents your maximum jumping distance at that position. (For Example, if you are standing on 3, you can jump up to 3 tiles forward). 
  
  Find out if you can reach the last tile.
 **/

  function canReachEnd(input){
    if (!input.length){
      return "0 0";
    }
    
    //console.log(`Total de casas: ${input.length}`)      
    total = input.length - 1;
    position = 0;
    
    while(position < total){
      //console.log(`Casa ${position} e valor ${input[position]}, pula para a casa ${position + input[position]}`)
      if(input[position] === 0){
        //console.log("achou 0 antes da ultima casa")
        return false;  
      }
      position += input[position];

      return true;

    }    
  }
  
  
  const input  = [1,2,0,0,1];
  console.log(canReachEnd(input));