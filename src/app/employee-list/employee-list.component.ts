import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    {"id" : 1, "name" : "Nishant",  "age" : 32},
    {"id" : 2, "name" : "Akshay",  "age" : 31},
    {"id" : 3, "name" : "Radhika",  "age" : 30},
    {"id" : 4, "name" : "Susie",  "age" : 28},
    {"id" : 5, "name" : "peter",  "age" : 31},
    {"id" : 6, "name" : "John",  "age" : 36},
  ]

  constructor() { }

  ngOnInit() {
  }

}
