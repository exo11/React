export interface ICard {
  imdbID: string,
  Type: string,
  Title: string, 
  Year: string, 
  Poster: string
}

export interface IObj {
  Poster: string,
  Title: string,
  Year: string,
  Genre: string,
  Runtime: string,
  Director: string,
  Actors: string,
  imdbRating: string
}

export interface IMovies {
  movies: ICard[],
  loading: boolean,
  error?: null | string
}

export interface IFilm {
  film: IObj | null,
  loading: boolean,
  error?: null | string
}

