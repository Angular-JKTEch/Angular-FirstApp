import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = []
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees =  this._employeeService.getEmployee();
  }

}
