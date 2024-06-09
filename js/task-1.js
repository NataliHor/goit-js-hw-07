const items = document.querySelectorAll('.item')
console.log('Number of categories: ', items.length)
items.forEach((category) => {
    console.log('Category: ', category.childNodes[1].textContent);
    console.log('Elements: ',category.querySelectorAll('ul > li').length);
});
