class movie {
    constructor(title , studio , rating ="PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }   
     getPG(movieArrays){
      return movieArrays.filter(movie => movie.rating == "PG");
     }  
    }
    let movie1 = new movie("Iron man" , "marvel studios" ,"PG");
    let movie2 = new movie("joker" , "DC studios" ,"R");
    const movieArray = [movie1 , movie2];
    let movie3 = new movie(movieArray); //instance
    
  let film = new movie("Kings Man" , "Marv Films Cloudy Productions TSG Entertainment" ,"PG13");
  
  console.log(film);
  console.log(movie3.getPG(movieArray))