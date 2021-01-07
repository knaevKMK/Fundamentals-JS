function solve(array){
    let k = array.shift();
let result = '';
    for (let index = 0; index < k; index++) {
        const element = array[index];
        result+=element+' ';
    }
    result= result.trim();
    result+= '\n';
    for (let index = array.length-k; index < array.length; index++) {
        const element = array[index];
        result+= element+' ';
    }
    result.trim();
    console.log(result);
}
solve([2, 
    7, 8, 9]
    );
    solve([3,
        6, 7, 8, 9]
       );