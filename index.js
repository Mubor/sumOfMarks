let sum = arr => arr.reduce( (summa, elem) => summa + elem);

let markObj = document.querySelectorAll('.widget-table__row-description > .ng-star-inserted:last-child')
let count = sum([...markObj].map(el => el.innerHTML));

console.log(count);