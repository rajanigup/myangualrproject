import { Component, OnInit } from '@angular/core';

//import { Employee } from './employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  // emp: Employee[] = [
  //   {
  //     empID: 1,
  //     firstName: "Jhon",
  //     lastName: "Smith",
  //     salary: 23456,
  //     dob: "12-12-1983",
  //     email: "jhon@abc.com",
  //   },
    
  // ];
 
  empList=[{
      empID: 1,
      firstName: "Jhon",
      lastName: "Smith",
      salary: 10000,
      dob: "Thursday, December 2, 2021, 4:39:55 PM GMT+05:00",
      email: "jhon@abc.com",
  },
  {empID: 2,
  firstName: "Json",
  lastName: "Smith",
  salary: 12000,
  dob: "Friday, December 5, 2021, 4:39:55 PM GMT+05:00",
  email: "json@abc.com",
  }
  ,
  {empID: 3,
  firstName: "Amber",
  lastName: "Dorothy",
  salary: 10000,
  dob: "Saturday, November 7, 2021, 4:39:55 PM GMT+05:00",
  email: "amber@abc.com",
  },
  
  {empID: 4,
  firstName: "Mark",
  lastName: "Frank",
  salary: 15000,
  dob: "Friday, December 5, 2021, 4:39:55 PM GMT+05:00",
  email: "mark@abc.com",
  }
];
  showEdit:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
//   //edit emp
//   EditEmp(val)
//   {
//     this.showEdit=true
//     console.log(val+this.showEdit)
//   }
// //update emp
//   UpdateEmp(val)
//   {
//     this.showEdit=false
//     console.log(val+this.showEdit)
//   }

}
