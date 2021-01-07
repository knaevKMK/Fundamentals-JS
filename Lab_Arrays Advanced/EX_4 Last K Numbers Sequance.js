function solve(n, k) {
    let num = [1];
    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(i - k, 0);
        let currentValue =num.slice(startIndex,i).reduce((a,b)=>a+b);
            num.push(currentValue);
    }
    console.log(num.toString().replace(/,/g, ' '));
}

solve(6, 3);
solve(8, 2);