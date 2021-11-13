import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  conditionSwitch = 'red'

  constructor() { }

  ngOnInit(): void {
  }

  // changeColor(color: string): void{
  //   this.conditionSwitch= color;
  // }

  changeColor(e: any) {
    this.conditionSwitch= e.target.value;
  }
}
