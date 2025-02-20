const catCount = document.querySelectorAll('.item').length;
console.log('Number of categories:', catCount);

const catTitleAndElemNumber = document.querySelectorAll('h2');
catTitleAndElemNumber.forEach(elem => {
  console.log('Category:', elem.textContent);
  console.log('Elements:', elem.nextElementSibling.children.length);
});
