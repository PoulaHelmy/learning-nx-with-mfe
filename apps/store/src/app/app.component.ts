import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import {formatRating} from "../../../../libs/store/util-formatters/src/lib/store-util-formatters";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   title = 'Board Game Hoard';
  formatRating = formatRating;
  games = getAllGames();
}
