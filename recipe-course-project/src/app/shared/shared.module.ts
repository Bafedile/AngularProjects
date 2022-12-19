import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadinSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    LoadinSpinnerComponent,
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports:[
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports: [
    LoadinSpinnerComponent,
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
  ],
})
export class SharedModule {}
