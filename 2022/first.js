const fs = require('fs');
const content = fs.readFileSync('./calories.txt', 'utf8');
const arr = content.split(/\r?\n/);

var arr2 = []
var indexes = []
function my_function(pole){
    for (var i = 0; i < pole.length; i++) {   
        indexes.push(arr.indexOf('',i))

    // if (pole[i] == '') {
    //     return   
    // }
    // else {
    //     arr2.push(Number(arr[i]))
    // }
}
}
function spliByIndex(index){
    for (var i=0; i<= index.length; i++) {
        console.log(arr.slice(index[i-1],index[i]));
    }
}

let sum = 0
function soucet(array){
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum
}
my_function(arr)
soucet(arr2)
var newIndexes = [...new Set(indexes)]
spliByIndex(newIndexes)
var newIndexes = [...new Set(indexes)]
console.log(arr2, sum, newIndexes)