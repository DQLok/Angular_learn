import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TestComponent] // xuất bản modul để app modul có thể xử lý
})
export class TestModule { }
