import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pexample',
  templateUrl: './pexample.component.html',
  styleUrls: ['./pexample.component.css']
})
export class PexampleComponent implements OnInit {
  myString = "Hey I am here from India";
  myNumber = '199';
  myPercentage = 0.64;
  myDecimal=12.764765;
  myDate = new Date();
  myPassword = '';
  constructor() { }

  ngOnInit(): void {
  }

}
