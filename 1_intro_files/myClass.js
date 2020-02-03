class myClass {
  constructor(name, year, country) {
    this.name = name;
    this.year = year;
    this.country = country;
    this.genreArray = [];
  }
  addClass(genre) {
    this.genreArray.push(genre);
  }
}

const filmClass = new myClass("Show1", "2010", "Denmark");
filmClass.addClass("Reality");
filmClass.addClass("Documantary");

console.log(filmClass);
