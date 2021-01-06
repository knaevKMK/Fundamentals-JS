function solve(item, pcs) {
    switch (item) {
        case 'water': pcs *= 1.0; break;
        case 'coffee': pcs *= 1.5; break;
        case 'coke': pcs *= 1.4; break;
        case 'snacks': pcs *= 2.0; break;
    }
    console.log(`${pcs.toFixed(2)}`);
}

solve ('coffee',2);