function solve(array){
let sumEven=0;
let sumOdd=0;
for (let i=0; i<array.length; i++){
    let current= array[i];
    if (current %2==0){
        sumEven+=current;
    } else{
        sumOdd+=current;
    }
}
console.log(sumEven-sumOdd)
}

solve ([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);