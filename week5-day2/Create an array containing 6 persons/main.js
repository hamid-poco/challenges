/* Create an array containing 6 persons,
 girls and boys. Each person should have 2 keys, name and gender. */

 let person = [

  {
      name : "Jack",
      gender : "Male"
  },

  {
    name : "Tom",
    gender : "Male"
  },

  {
    name : "Bob",
    gender : "Male"
  },

  {
    name : "Sarah",
    gender : "Female"
  },

  {
    name : "Sophie",
    gender : "Female"
  },

  {
    name : "Théa",
    gender : "Female"
  },
];

let numGirls = 0;
let numBoys = 0;

for( let i = 0; i < person.length; i++) {


let gender = person[i].gender
if(gender === "Female"){
  numGirls++
}
else {
  numBoys++
}

  

}
let output = "My list contains: " + numGirls + "girls and " +numBoys + "boys"
console.log(output);