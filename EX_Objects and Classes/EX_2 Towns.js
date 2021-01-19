function solve(array) {

    let towns = [];

    for (let i = 0; i < array.length; i++) {
        let [town, latitude, longitude] = array[i].split(' | ');
       
        latitude = `${parseFloat(latitude).toFixed(2)}`;
     
        longitude = `${parseFloat(longitude).toFixed(2)}`;
       
        let city = {
            town,
            latitude,
            longitude

        }
        towns.push(city);
    }
    towns.forEach(city => console.log(city));
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);