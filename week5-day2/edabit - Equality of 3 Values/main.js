//edabit - Equality of 3 Values


function equal(a, b, c) {
  if (a === b && a === c) {
         return 3;
  }
  else if (a === b || a === c || b === c) {
         return 2;
  }
   else{
       return 0;
   }
   }
console.log( equal(4, 5, 6));