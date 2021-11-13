import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDayComponent } from './first-day/first-day.component';
import { LessonComponent } from './lesson.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { DataBindingComponent } from './second-day/data-binding/data-binding.component';
import { OneWayComponent } from './second-day/data-binding/one-way/one-way.component';
import { TwoWayComponent } from './second-day/data-binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './second-day/directives/directives.component';
import { StructuralDirectiveComponent } from './second-day/directives/structural-directive/structural-directive.component';
import { NgIfComponent } from './second-day/directives/structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './second-day/directives/structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './second-day/directives/structural-directive/ng-switch/ng-switch.component';
import { AttributeDirectiveComponent } from './second-day/directives/attribute-directive/attribute-directive.component';
import { NgClassComponent } from './second-day/directives/attribute-directive/ng-class/ng-class.component';
import { NgStyleComponent } from './second-day/directives/attribute-directive/ng-style/ng-style.component';
import { HightLightDirective } from './second-day/directives/custom-directives/hight-light.directive';



@NgModule({
  declarations: [
    LessonComponent,FirstDayComponent, SecondDayComponent, DataBindingComponent, OneWayComponent, TwoWayComponent, DirectivesComponent, StructuralDirectiveComponent, NgIfComponent, NgForComponent, NgSwitchComponent, AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HightLightDirective
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LessonComponent]
})
export class LessonModule { }
