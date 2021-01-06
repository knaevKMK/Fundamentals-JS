function solve(x, y, operator) {

    switch (operator) {
        case 'multiply': x *= y; break;
        case 'divide': x /= y; break;
        case 'add': x += y; break;
        case 'subtract': x -= y; break;
    }
    console.log(x);
}

solve(5, 5, 'multiply');