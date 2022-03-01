import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-cmp",
  templateUrl: "./new-cmp.component.html",
  styleUrls: ["./new-cmp.component.css"],
})
export class NewCmpComponent implements OnInit {
  firstname = " rakesh";
  lastName = "";
  save() {
    console.log(this.firstname + " " + this.lastName);
  }

  canSave = true;
  isUnchanged = true;
  isSpecial = true;
  currentClasses: Record<string, boolean> = {};
  currentStyle: Record<string, string> = {};
  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyle();
  }
  setCurrentClasses() {
    // css classes : added or removed per the state of our compoennt properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: this.isUnchanged,
      special: this.isSpecial,
    };
  }
  setCurrentStyle() {
    this.currentStyle = {
      "font-style": this.canSave ? "italic" : "normal",
      "font-weight": this.isUnchanged ? "bold" : "normal",
      "font-size": this.isSpecial ? "24px" : "12px",
    };
  }

  // @Input() size = " "; // decorate the property with input

  // @Output() newItemEvent = new EventEmitter<string>();

  // addNewItem(value:string) {
  //   this.newItemEvent.emit(value);
  // } // all items will be in string

  constructor() {}
}
