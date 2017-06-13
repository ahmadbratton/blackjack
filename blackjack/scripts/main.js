/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue (hand) {
  let intArray = [];
   let result = 0;
   let card;
  let num;
  for (var i = 0; i < hand.length; i++) {
    card = hand[i];
   
    // let result = hand[0];
    if (card === "1" || card === "2" ||card === "3" ||card === "4" ||card === "5" || card === "6" || card === "7" ||card === "8" ||card === "9" ||card === "10" ){
     num = parseInt(card);
     intArray.push(num);
    //  console.log(card);
    }

    if (card === "K" || card === "Q" || card === "J"){
      intArray.push(10);
      // console.log(intArray);
    
    }
      
      // result = result + intArray[i];
      // console.log(intArray);

    if (result > 11 && card === "A"){
      intArray.push(1);

      // result = result + 1;
      

    }
    if (result <= 11 && card === "A") {
      intArray.push(11);
      // result = result + 11
      
    }
    
    // console.log(intArray);
    // console.log(intArray[i]);
    // console.log(result);
    result = result + intArray[i];
    if (result > 21) {
      result = result - 10;
    }
    
  }
  

  return result;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/