/**
  A string of brackets is correctly matched if you can pair every opening bracket up with a later closing bracket, and vice versa. For example, "(()())" is correctly matched, and "(()" and ")('' are not.

  Implement a function which takes a string of brackets and returns the minimum number of brackets you'd have to add to the string to make it correctly matched.

  For example, "(()" could be correctly matched by adding a single closing bracket at the end, so you'd return 1. ")('' can be correctly matched by adding an opening bracket at the start and a closing bracket at the end, so you'd return 2.

  If your string is already correctly matched, you can just return 0.
 **/

  function calculateBrackets(input){
    arr = input.split('');
    let open = close = 0;	
  
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === "("){
        open += 1 ;
      } else if(arr[i] === ")") {
        if (open  > 0){
          open -= 1;
        } else{
          close += 1;
        }	
      }
    }
    
    return open + close;
  }
  
  const input = ")x((a((a)))"
  console.log(calculateBrackets(input))	