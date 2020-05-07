//Using the ternary operator create a condition who checks if today is Tuesday 
function dayOfTheWeek(input) {

  let day = '';

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = weekDays[ new Date().getDay() ];

if(input == day){
  output = "Yes today is " + input
}
else {
  output = "No today is not " + input
}
console.log(output);
}

dayOfTheWeek("Thursday"); /*we  //=> Yes today is Tuesday*/
