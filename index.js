let sum = arr => arr.reduce( (summa, elem) => summa + elem);

let getValuesFromArray = objectArr => {
  let res = [];
  
  for (let i = 0; i < objectArr.length; i++) {
    res.push(parseInt(objectArr[i].innerHTML));
  }
  
  return res;
}

let markObj = document.querySelectorAll('.widget-table__row-description > .ng-star-inserted:last-child')
let marks = getValuesFromArray(markObj);

let count = sum(marks);

console.log(count);