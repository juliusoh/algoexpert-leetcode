function isValidSubsequence(array, sequence) {
    let counter = 0;
 
   for (let i = 0; i < array.length; i++) {
     let currentNumber = array[i];
     if (sequence[counter] === currentNumber) {
       counter ++;
     }
 
     if (counter === sequence.length) {
       return true;
     }
   }
   return false;
 }
 

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])