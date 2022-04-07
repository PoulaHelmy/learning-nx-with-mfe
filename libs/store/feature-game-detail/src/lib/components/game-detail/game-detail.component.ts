import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'bg-hoard-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  gameId$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id'))
  );

  ngOnInit(): void {
  }

}
