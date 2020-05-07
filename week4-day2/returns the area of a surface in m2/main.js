//returns the area of a surface in m2
function calculateSurface () {

  let input1 = parseInt( prompt("Put your length") );
  let input2 = parseInt( prompt("Put your width") );
  alert (input1*input2 + " " + "m2" );
}

console.log(calculateSurface(2, 3));