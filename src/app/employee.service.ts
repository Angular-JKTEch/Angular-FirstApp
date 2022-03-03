import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployee() {
    return [
      {"id" : 1, "name" : "Nishant",  "age" : 32},
      {"id" : 2, "name" : "Akshay",  "age" : 31},
      {"id" : 3, "name" : "Radhika",  "age" : 30},
      {"id" : 4, "name" : "Susie",  "age" : 28},
      {"id" : 5, "name" : "peter",  "age" : 31},
      {"id" : 6, "name" : "John",  "age" : 36},
    ]
  }

}

