import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  emailId;
  formdata;
  passwrd;
  
 

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup ({
      emailId: new FormControl(""),
      passwrd: new FormControl("")
  })};
  onClickSubmit(data) {
    this.emailId = data.emailId
    this.passwrd = data.passwrd
    console.log(data.emailId);
    console.log(data.passwrd);
    

    
  }


}
