const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .split('\n') // split by new line
  .filter((x) => x); // remove empty lines

function part1() {
  var formattedInput = [];

  input.forEach((x) => {
    formattedInput.push(x.split(' '));
  });

  var total = 0;

  formattedInput.map((x) => {
    switch (x[0]) {
      case 'A':
        if (x[1] == 'X') total += 1 + 3; // draw
        if (x[1] == 'Y') total += 2 + 6; // win
        if (x[1] == 'Z') total += 3; // loss
        break;
      case 'B':
        if (x[1] == 'X') total += 1; // loss
        if (x[1] == 'Y') total += 2 + 3; // draw
        if (x[1] == 'Z') total += 3 + 6; // win
        break;
      case 'C':
        if (x[1] == 'X') total += 1 + 6; // win
        if (x[1] == 'Y') total += 2; // loss
        if (x[1] == 'Z') total += 3 + 3; // draw
        break;
    }
  });

  console.log('total score is: ', total);
}

function part2() {
  var formattedInput = [];

  input.forEach((x) => {
    formattedInput.push(x.split(' '));
  });

  var total = 0;
  const values = { rock: 1, paper: 2, scissors: 3 };

  formattedInput.map((x) => {
    switch (x[0]) {
      case 'A': // ROCK
        if (x[1] == 'X') total += values.scissors; // lose
        if (x[1] == 'Y') total += values.rock + 3; // draw
        if (x[1] == 'Z') total += values.paper + 6; // win
        break;
      case 'B': // PAPER
        if (x[1] == 'X') total += values.rock; // lose
        if (x[1] == 'Y') total += values.paper + 3; // draw
        if (x[1] == 'Z') total += values.scissors + 6; // win
        break;
      case 'C': // SCISSORS
        if (x[1] == 'X') total += values.paper; // lose
        if (x[1] == 'Y') total += values.scissors + 3; // draw
        if (x[1] == 'Z') total += values.rock + 6; // win
        break;
    }
  });

  console.log('total score with new strategy is: ', total);
}

part1();
part2();
