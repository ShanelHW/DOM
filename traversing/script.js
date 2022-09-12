// Query Elements
const introParagraph = document.getElementById('intro')
console.log(introParagraph);


const subTitle = document.getElementsByClassName('sub-title');
console.log(subTitle);

const subTitleCss = document.querySelectorAll('.sub-title');
console.log(subTitleCss);
subTitleCss.forEach((el) => console.log(el));

const arrOfSubTitles = Array.from(subTitleCss);
console.log(arrOfSubTitles);
