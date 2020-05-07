/* HTML DOM
------------------------ */

const h1 = document.querySelector('h1');

h1.innerHTML = "I change my text with new text 😎"

h1.setAttribute('id', 'main-title');
h1.classList.add('title');