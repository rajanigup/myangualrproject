import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myName = "Hello I am from Mars";
  @Input('dataFromParent') public name:any
  @Input('dataFromParent1') public name2:any

  constructor() { }

  ngOnInit(): void {
  }
  myclick=()=>{console.log("heelllooo")}

}
