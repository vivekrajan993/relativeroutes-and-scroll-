import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [TestComponent, NewComponent],
  imports: [
    CommonModule
  ]
})
export class NewModule { }
