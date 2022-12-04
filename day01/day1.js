const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .split('\n')
  .map(Number);

function part1() {
  input.push(0);

  var totals = [];
  var curr = 0;

  input.forEach((x) => {
    if (x != 0) curr += x;
    else {
      totals.push(curr);
      curr = 0;
    }
  });

  console.log('largest value is: ', totals.sort((a, b) => b - a)[0]);
}

function part2() {
  input.push(0);

  var totals = [];
  var curr = 0;

  input.forEach((x) => {
    if (x != 0) curr += x;
    else {
      totals.push(curr);
      curr = 0;
    }
  });

  var sortedArr = totals.sort((a, b) => b - a);

  console.log(
    'sum of top 3 largest values is: ',
    sortedArr[0] + sortedArr[1] + sortedArr[2]
  );
}

part1();
part2();
