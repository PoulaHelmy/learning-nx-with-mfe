import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedAuthModule} from "@bg-hoard/shared/auth/shared-auth.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedAuthModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class FeatLoginModule {
}
