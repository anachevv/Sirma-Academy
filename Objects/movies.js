function storeMovieData(obj) {
    var db = {};

    obj.forEach(command => {
        let line = command.split(' ');

        if (line[0] == "addMovie") {
            let movie = line.slice(1).join(' ');
            db[movie] = {name: movie};
        }

        else if (line.includes('directedBy')) {
            let index = line.indexOf('directedBy');
            let movie = line.slice(0, index).join(' ');

            if (db.hasOwnProperty(movie)) {
                let director = line.slice(index + 1).join(' ');
                db[movie].director = director;
            }
        }

        else if (line.includes('onDate')) {
            let index = line.indexOf('onDate')
            let movie = line.slice(0, index).join(' ');

            if (db.hasOwnProperty(movie)) {
                let date = line.slice(index + 1).join(' ');
                db[movie].date = date;
            }
        }
    });

    Object.values(db).forEach(movie => {
        if (movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
            console.log(movie);
        }
    });

}

storeMovieData(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Spiderman 2 onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);