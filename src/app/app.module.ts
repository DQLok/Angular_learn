import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { LessonModule } from './lesson/lesson.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [// định nghĩa các component
    AppComponent, DemoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    LessonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
