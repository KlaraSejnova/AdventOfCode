const fs = require('fs');
const content = fs.readFileSync('./game.txt', 'utf8');
const arr = content.split(/\r?\n/);
const results = []
for (var i = 0; i < arr.length; i++){
    if (arr[i] == 'A X') {
        results.push(Number(1 + 3))
    }
    if (arr[i] == 'B X') {
        results.push(Number(1 + 0))
    }
    if (arr[i] == 'C X') {
        results.push(Number(1 + 6))
    }
    if (arr[i] == 'A Y') {
        results.push(Number(2 + 6))
    }
    if (arr[i] == 'B Y') {
        results.push(Number(2 + 3))
    }
    if (arr[i] == 'C Y') {
        results.push(Number(2 + 0))
    }
    if (arr[i] == 'A Z') {
        results.push(Number(3 + 0))
    }
    if (arr[i] == 'B Z') {
        results.push(Number(3 + 6))
    }
    if (arr[i] == 'C Z') {
        results.push(Number(3 + 3))
    }
    // second part of the task number Two:
    
    // if (arr[i] == 'A X') {
    //     results.push(Number(3 + 0))
    // }
    // if (arr[i] == 'B X') {
    //     results.push(Number(1 + 0))
    // }
    // if (arr[i] == 'C X') {
    //     results.push(Number(2 + 0))
    // }
    // if (arr[i] == 'A Y') {
    //     results.push(Number(1 + 3))
    // }
    // if (arr[i] == 'B Y') {
    //     results.push(Number(2 + 3))
    // }
    // if (arr[i] == 'C Y') {
    //     results.push(Number(3 + 3))
    // }
    // if (arr[i] == 'A Z') {
    //     results.push(Number(2 + 6))
    // }
    // if (arr[i] == 'B Z') {
    //     results.push(Number(3 + 6))
    // }
    // if (arr[i] == 'C Z') {
    //     results.push(Number(1 + 6))
    // }
}
let result = results.reduce((a, b) => {
  return a + b;
});

console.log(result);
