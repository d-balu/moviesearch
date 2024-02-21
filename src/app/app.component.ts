import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 st!:string;
 movies: any[] = []
  find()
  {
    fetch (`https://www.omdbapi.com/?s=${this.st}&apikey=ef9acd5`)
    .then((res) => res.json())
    .then((data) => {this.movies = data.Search});
  }
  c=0;
  watchlist()
  {
    this.c++;
  }

}
