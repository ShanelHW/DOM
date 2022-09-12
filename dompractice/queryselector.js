
// Get the element with an ID of 'first' using querySelector
const first = document.querySelector('#first')
console.log(first);

// Get the elements with a class of 'second' with querySelector
const second = document.querySelector('.second');
console.log(second);
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
const secondAll = document.querySelectorAll('.second');
console.log(secondAll);
/*querySelectorAll returns all occurrances and querySelector returns only the first*/

// Get the span element using querySelector
const span = document.querySelector('span');
console.log(span);
// Get multiple span elements using querySelectorAll
const spanAll = document.querySelectorAll('span');
console.log(spanAll);

// Select only "a" tags *directly inside* of a div (no grandchildren).
const aChild = document.querySelector('a')
console.log(aChild)
// Select all elements that contain a "data-target" attribute
const targets = document.querySelectorAll('[data-target]')
console.log(targets)
// Select all elements where the data-target attribute equals "#false"
const falseTargets = document.querySelectorAll('[data-target="false"]')
console.log(falseTargets)
