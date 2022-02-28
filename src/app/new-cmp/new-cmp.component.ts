import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'] 
})
export class NewCmpComponent implements OnInit {

  @Input() size = " "; // decorate the property with input 

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value:string) {
    this.newItemEvent.emit(value);
  } // all items will be in string 

  constructor() { }

  ngOnInit() {
  }

}
