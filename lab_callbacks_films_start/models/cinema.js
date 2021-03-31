const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  return this.films.map((film) => {
    return film.title
  })
};

Cinema.prototype.findFilmByTitle = function(title) {
  return this.films.find((film) => {
    return film.title === title
  })
}

Cinema.prototype.filterFilmsByProperty = function(property, value) {
  return this.films.filter((film) => {
    return film[property] === value
  })
}

Cinema.prototype.checkIfFilmsFromYear = function(year) {
  return this.films.some((film) => {
    return film.year === year
  })
}

Cinema.prototype.checkIfMinimumLength = function(length) {
  return this.films.every((film) => {
    return film.length >= length
  })
}

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce((totalFilmLength, film) => {
    return totalFilmLength + film.length
  }, 0)
}


module.exports = Cinema;
