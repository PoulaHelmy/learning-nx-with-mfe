import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class FeatLoginModule {}
