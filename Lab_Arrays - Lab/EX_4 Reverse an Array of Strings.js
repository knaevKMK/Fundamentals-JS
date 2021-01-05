function solve(array){
 let newArray= [];
 let index= 0;
 for (let i =array.length -1; i >=0; i--){
     newArray[index++]= array[i];
 }
 console.log (newArray.toString().replace(/,/g,' '));
}

solve(['a', 'b', 'c', 'd', 'e']);
solve (['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);