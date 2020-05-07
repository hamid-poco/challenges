//Frames Per Second
function minToSecPrompt() {

  let userInput = parseInt( prompt("Number of minutes") ); //by default it's a string
  alert(userInput + " minutes = " + (userInput * 60) + " seconds" );

}
minToSecPrompt();
 