function solve(array1, array2) {
    let store = [];
    let product = {
    }

    while (array1.length) {
        let name = array1.shift();
        let price = parseFloat(array1.shift());
        store.push(product = { name, price });
    }


    while (array2.length) {
        let name = array2.shift();
        let price = parseFloat(array2.shift());

        let product = store.filter(prod => prod['name'] == name);
    

        if (!product.length) {
            store.push(product = { name, price });
        } else {
            store.map(product => {
                if (product['name'] == name) {
                    product['price'] += price;
                }
            })
                ;
        }



    }

    store.forEach(product => console.log(`${product['name']} -> ${product['price']}`));
}


solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);