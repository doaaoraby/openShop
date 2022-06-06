import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents=[
  MatSidenavModule,MatToolbarModule,MatCheckboxModule,MatDividerModule,MatFormFieldModule,MatCardModule,MatGridListModule
 ];
 
@NgModule({
 
  imports:[ MaterialComponents ],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
