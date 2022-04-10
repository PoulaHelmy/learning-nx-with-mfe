import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RemoteEntryComponent} from './entry.component';
import {RouterModule} from '@angular/router';
import {FeatLoginModule} from "@bg-hoard/feat-login/feat-login.module";
import {MatCardModule} from "@angular/material/card";
import {StoreUiSharedModule} from "@bg-hoard/store/ui-shared";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    StoreUiSharedModule,
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
