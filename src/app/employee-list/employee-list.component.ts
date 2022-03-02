import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'app/myservice.service';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  todaydate;
  public employees = []
  

  constructor(private myservice: MyserviceService, private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.employees = this._employeeService.getEmployee();

  }

}
