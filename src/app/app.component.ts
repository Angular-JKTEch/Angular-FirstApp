import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalSize = "200ft"

  items = ['item1'];
  addItem(newItem:string){
    this.items.push(newItem);
  }
  
  
 
  
  
  
  
  
  title = "This is our Angular PROgram";

  months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct" , "November", "Dec"]
  isavailable = true;

  clickFunction() {
    alert("this button has been clicked!")
    console.log("my button has been clicked");
    
  }

  changeMonths(event) {
    console.log("chnaged month from the drop deown menu");
    console.log(event.type);
    
  }

}