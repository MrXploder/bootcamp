const myArray = [1, 2, 3, 4, 5, 1, 3, 5];

function histogram(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (typeof accumulator[currentValue] !== 'string') {
      accumulator[currentValue] = '';
    } else {
      accumulator[currentValue] += '*';
    }

    return accumulator;
  }, {});
}

console.log(histogram(myArray));
