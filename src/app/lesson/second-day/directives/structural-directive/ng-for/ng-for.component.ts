import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  studentList = [
    {
      name: "Lok",
      age: 18,
    },
    {
      name: "Bao",
      age: 19,
    },
    {
      name: "Hieu",
      age: 20,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
