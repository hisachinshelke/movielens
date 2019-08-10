import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  apiUrl: string = 'http://api.themoviedb.org/3/search/movie?query=&query=';
  apiKey: string = '';
  
  movies: any = [];
  constructor(private httpClient: HttpClient) { }

  searchMovie(movieName: string) {
    //return this.httpClient.get<any>('${this.apiUrl}' + encodeURI(movieName) + '&${this.apiKey}')
    return this.httpClient.get<any>(this.apiUrl + encodeURI(movieName) + '&' +this.apiKey)
      .pipe(
        map(modal => {
          this.movies = modal.results;
          return modal.results;
        })
      )
  }

  getMovieFromCache(id: string) {
    let cachedMovie = null;

    this.movies.forEach(movie => {
      if (movie.id == id) {
        cachedMovie = movie;
      }
    })
    console.log(cachedMovie);
    return cachedMovie;
  }
}











