// const navigatorEl = document.querySelector('#categories')
// console.log(navigatorEl)

const navigatorEl = document.querySelector('#categories');
console.log(navigatorEl);

const amountEl = navigatorEl.querySelectorAll('h2');
console.log('Number of categories:', amountEl.length);

const firstNameEl = navigatorEl.querySelector('h2');
console.log('Category:', firstNameEl.textContent);

const quantityEl = navigatorEl.querySelector('li');
console.log('Elements:', quantityEl.getAttribute("ul"));


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5