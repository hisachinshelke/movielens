import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  movies: any[];

  constructor(private movieService: MovieServiceService, private router: Router) { }

  ngOnInit() {
  }

  searchForMovie(event, key) {
    if (event.target.value.length > 2) {
      this.movieService.searchMovie(event.target.value).subscribe((result) => {
        this.movies = result;
      })
    }
  }

  selectMovie(event, movie) {
    console.log(movie);
    this.router.navigateByUrl('/info/' + movie.id);
  }
}
