function solve(array) {
    let movieList = [];


    while (array.length) {
        let line = array.shift();

        if (line.includes('addMovie')) {
            let name = line.replace('addMovie ', '');
            movieList.push(movie = { name });

        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ')
            movieList.map(movie => movie['name'] === name ? movie.director = director : undefined);

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ')
            movieList.map(movie => movie['name'] == name ? movie.date = date : undefined);

        }
    }
   movieList.filter(movie =>Object.keys(movie).length == 3).forEach(movie=>console.log(JSON.stringify(movie)));
 
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);