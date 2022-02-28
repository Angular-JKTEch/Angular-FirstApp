import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string = "Nishant";
  age:number = 32;
  books : any = {
    title: "Random Book",
    author: "Mr author",
    price: 200 //. notation can be used to access any spefic f=property of an object 
  } // style binding <element [style.style-property] = "'style-value'">

  status:string = 'errr';
  getColor() {
    return 'White'
  }

  

  constructor() { }

  ngOnInit() {
  }

}
