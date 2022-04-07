import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule.forChild([
            {path: '', pathMatch: 'full', component: GameDetailComponent}
        ]),
        MatButtonModule,
    ],
  declarations: [
    GameDetailComponent
  ],
})
export class StoreFeatureGameDetailModule {}
