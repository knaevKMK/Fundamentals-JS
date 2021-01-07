function solve(array){
    let result=[];
    for (let index = array.length-1; index >=0; index--){
        if(index %2!=0){
            result.push(array[index]*2);
        }   
    }
    console.log(result.join(' '));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);