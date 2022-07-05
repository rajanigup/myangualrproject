import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstproject';
  dataToChild = "Something for the child from parent";
  dataToChild1 = "Something for the child from parent second";
}
