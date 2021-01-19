function solve (a,b,c){
    let person= {
        firstName:a,
        lastName:b,
        age: Number(c)
    }
    return person;
}

console.log(solve("Peter", 
"Pan",
"20"
));