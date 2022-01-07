// const navigatorEl = document.querySelector('#categories')
// console.log(navigatorEl)

const navigatorEl = document.querySelector('#categories');
console.log(navigatorEl);

const firstamountEl = navigatorEl.querySelectorAll('h2');
console.log('Number of categories:', firstamountEl.length); // Number of categories: 3

const firstNameEl = navigatorEl.querySelector('h2');
console.log('Category:', firstNameEl.textContent); // Category: Animals

const firstquantityEl = navigatorEl.querySelectorAll('.item ul');

console.log('Elements:', firstquantityEl[0].childElementCount); // Elements: 4



const secondNameEl = navigatorEl.querySelectorAll('h2');
console.log('Category:', secondNameEl[1].textContent); // Category: Products

const secondquantityEl = navigatorEl.querySelectorAll('.item ul');

console.log('Elements:', secondquantityEl[1].childElementCount); // Elements: 3


const lastNameEl = navigatorEl.querySelectorAll('h2');
console.log('Category:', lastNameEl[2].textContent); // Category: Technologies

const lastquantityEl = navigatorEl.querySelectorAll('.item ul');

console.log('Elements:', lastquantityEl[2].childElementCount); // Elementlast





