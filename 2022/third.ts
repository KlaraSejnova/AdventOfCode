import * as fs from "fs";
const file: string = fs.readFileSync("rucsack.txt", "utf8");
const arr: string[] = file.split(/\r?\n/);
const smallLetters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const batohy: string[] = [];
let group: string[][] =[];
for (var i: number = 0; i < arr.length; i++) {
  const rucksacks: string[] = arr[i].split("");
  group.push(rucksacks)
  const middleIndex: number = Math.ceil(rucksacks.length / 2);
  const firstHalf: string[] = rucksacks.slice(0, middleIndex);
  const secondHalf: string[] = rucksacks.slice(-middleIndex);
  batohy.push(findCommonElements3(firstHalf, secondHalf));
  
}
let arrItem: string[] = []
let sameItem: string = 'string'
while (group.length > 1){
    let firstThree: string[][] = group.slice().splice(0, 3);
    for (var i = 0; i < firstThree[0].length; i++){
        for (var j = 0; j < firstThree[1].length; j++){
            for (var k= 0; k < firstThree[2].length; k++){
                if (firstThree[0][i] == firstThree[1][j] && firstThree[2][k] == firstThree[1][j] ){
                     sameItem = firstThree[2][k]
                }      
            }
        }
    }
    arrItem.push(sameItem)
    group.splice(0,3)
}
// console.log(arrItem)
function findCommonElements3(arr1: string[], arr2: string[]): string {
  return arr1.filter((element) => arr2.includes(element))[0];
}
const indexes: number[] = [];
for (var j: number = 0; j < batohy.length; j++)
  for (var i: number = 0; i < smallLetters.length; i++) {
    if (batohy[j] == smallLetters[i]) {
      indexes.push(i + 1);
    }
  }

  const indexes2: number[] = [];
for (var j: number = 0; j < batohy.length; j++)
  for (var i: number = 0; i < smallLetters.length; i++) {
    if (arrItem[j] == smallLetters[i]) {
      indexes2.push(i + 1);
    }
  }
let sum = indexes.reduce((a, b) => a + b);
let sum2 = indexes2.reduce((a, b) => a + b);

console.log(sum2)
