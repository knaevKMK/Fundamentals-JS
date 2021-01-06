function solve(input){
    let step= Number(input[input.length-1]);
    let result='';
    for (let index = 0; index < input.length-1; index+=step) {
 result +=(input[index] + ' ');
    }
    console.log(result);
}
solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);