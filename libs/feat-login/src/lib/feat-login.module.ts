import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class FeatLoginModule {
}
