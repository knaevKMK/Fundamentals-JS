function solve(x, y, z) {
    let array = [x, y, z];
    let negative = 0;
    let hasZero= false;
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            negative++;
        }
        if (array[index]===0) {
            hasZero= true;
        }
    }
   
    if (negative % 2 == 0 || hasZero) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}
solve(5, 12, -3);
solve(-5, 12, -3);
solve(-5, -12, -3);
solve(5, 0, -3);
solve(5, 12, 3);