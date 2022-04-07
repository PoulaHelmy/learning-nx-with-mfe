import {Component, OnInit} from '@angular/core';
import {formatRating} from "@bg-hoard/store/util-formatters";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Game} from "@bg-hoard/data-model/interfaces";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Board Game Hoard';
  formatRating = formatRating;
  games$: Observable<Game[]> = of([])

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get<Game[]>('/api').subscribe((res) => {
      console.log(res);
    })
    this.games$ = this.httpClient.get<Game[]>('/api');
  }
}
