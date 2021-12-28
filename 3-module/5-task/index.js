function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(function (item) {
      if (!isNaN(item)) {
        return +item;
      }
    })
    .filter( function (item) {
      if (item !== undefined){
        return item;
      }
    })
    .sort (function(a, b) { return a - b; })
  let result  = {};
  result .min = arr[0];
  result .max = arr[arr.length - 1];
  return result ;
}

const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

console.log(getMinMax(inputData));
