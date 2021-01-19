function solve(a,b,c){
    let object = {
        name: a,
        lastName: b,
        hairColor:c
    }

    return JSON.stringify(object);
}

console.log(solve('George',
'Jones',
'Brown'
));