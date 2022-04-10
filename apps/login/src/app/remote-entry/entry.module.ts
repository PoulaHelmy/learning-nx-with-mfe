import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RemoteEntryComponent} from './entry.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {
}
