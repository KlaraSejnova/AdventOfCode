const fs = require('fs');
const content = fs.readFileSync('./calories.txt', 'utf8');
const arr = content.split(/\r?\n/);

function my_function(pole){
    var indexes = []
    for (var i = 0; i < pole.length; i++) {   
        indexes.push(arr.indexOf('',i))
    }
    return indexes
}

function spliByIndex(index){
    var arrays = []
    var numberArray = []
    for (var i=0; i<= index.length; i++) {
        arrays.push(arr.slice(index[i-1],index[i]));
    }
    for (var i = 0; i < arrays.length; i++){ 
        for (var j =0; j < arrays[i].length; j++) {
            if ( arrays[i][j] == '') {   
            arrays[i].splice(j, 1); 
            }
        }
    numberArray.push(arrays[i].map(item=>Number(item)))
    }
    return numberArray 
}


var indexes = my_function(arr)
var newIndexes = [...new Set(indexes)]
var numberArray = spliByIndex(newIndexes)
var soucetSum = numberArray.map(arr => arr.reduce((sum,item) => sum += item, 0))
let highestToLowest = soucetSum.sort((a, b) => b-a);
console.log(highestToLowest[0]+highestToLowest[2]+highestToLowest[1])