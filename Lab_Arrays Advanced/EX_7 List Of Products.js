function solve(array){
    let count=1;
     array
     .sort()
     .forEach(element => {
         console.log(`${count++}.${element}`);
     });
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);