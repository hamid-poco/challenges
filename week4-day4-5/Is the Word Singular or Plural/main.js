//Is the Word Singular or Plural?
function isPlural(word) {
	if(word.endsWith('')){
		return true;
	}
	else{
		return false;
	}
}

console.log(isPlural("s"));