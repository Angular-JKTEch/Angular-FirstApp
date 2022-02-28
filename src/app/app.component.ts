import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = ''; //property
  // firstname = 'John';
  // lastname = "Travolta";
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