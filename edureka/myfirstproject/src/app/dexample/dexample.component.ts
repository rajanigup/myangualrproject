import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dexample',
  templateUrl: './dexample.component.html',
  styleUrls: ['./dexample.component.css']
})
export class DexampleComponent implements OnInit {
  myData = " i am from pluto";
  myBoolean:boolean =false;
  myArray:any[]=[
    {empId:1,
    name: "AJay"},
    {empId:2,
      name: "Nirali"},
    {empId:3,
      name: "Rajani"}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  myTrue = () =>
  {
    this.myBoolean = false;
  }
  myFalse = () =>
  {
    this.myBoolean = true;
  }

}
