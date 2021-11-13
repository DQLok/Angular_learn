import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export class OneWayComponent implements OnInit {

  name="Angular Basic 1";
  fullName="lokDQ";
  constructor() { }

  ngOnInit(): void {
  }

  changeName(): void {
    this.fullName = "DQLokkkkkkk"
  }
}
