import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  id: string;
  movie: {};
  constructor(private movieService: MovieServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovieFromCache(this.id);
  }

}
