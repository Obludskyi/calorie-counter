import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CaloriesComponent } from './calories.component';

@NgModule({
  declarations: [CaloriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CaloriesComponent}])
  ]
})
export class CaloriesModule {

}
