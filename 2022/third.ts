import * as fs from 'fs';
const file : string = fs.readFileSync('rucsack.txt','utf8');
const arr : string[]= file.split(/\r?\n/);
const smallLetters: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','I','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z']
const batohy: string[] = []
for (var i :number = 0; i < arr.length; i++){
    const rucksacks: string[] = arr[i].split('');
    const middleIndex : number = Math.ceil(rucksacks.length / 2);
    const firstHalf: string[] = rucksacks.splice(0, middleIndex);   
    const secondHalf: string[] = rucksacks.splice(-middleIndex);
    batohy.push(findCommonElements3(firstHalf, secondHalf))
}
console.log(batohy)
function findCommonElements3(arr1: string[], arr2: string[]): string {
    return arr1.filter(element => arr2.includes(element))[0];  
}
const indexes: number[] = [];
for (var j: number = 0; j < batohy.length; j++)
    for (var i :number = 0; i < smallLetters.length; i++){
       if (batohy[j] == smallLetters[i]){
             indexes.push(i+1)
      }
}
let sum = indexes.reduce((a, b) => a + b, 0);
console.log(sum);