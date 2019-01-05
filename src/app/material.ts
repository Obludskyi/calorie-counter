import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule],
})
export class MaterialModule { }
