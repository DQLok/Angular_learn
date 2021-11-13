import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  isShow = true;

  name ="";
  password="";
  isSignin=true;
  isSignout=false;

  constructor() { }

  ngOnInit(): void {
  }
  show(): void {
    this.isShow =true;
  }
  off(): void {
    this.isShow=false;
  }
  //-----------------------
  button(): void {
    this.isSignin=!this.isSignin;
    this.isSignout=!this.isSignout;
  }
}
