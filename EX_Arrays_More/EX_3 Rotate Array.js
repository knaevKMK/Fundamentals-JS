function solve(temp) {
    let indexReverce= (temp.pop());
   if (indexReverce.length>2) {
        console.log('Empty');
        return;
    }

    while (indexReverce >= temp.length) {
        indexReverce -= temp.length;
    }
    indexReverce = temp.length - indexReverce;
    let end = temp.slice(0, indexReverce);
    temp = temp.slice(indexReverce, temp.length).concat(end);
    console.log(temp.toString().replace(/,/g, ' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
solve(['remove', 'remove', 'remove']);