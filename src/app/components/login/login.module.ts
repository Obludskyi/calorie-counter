import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{path: '', component: LoginComponent}])
  ]
})
export class LoginModule { }
