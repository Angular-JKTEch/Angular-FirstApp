import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';


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
      emailId: new FormControl("" , Validators.compose([
        Validators.required,
        Validators.pattern("[^@]*@[^@]*")
      ])),
      passwrd: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
  })};
  onClickSubmit(data) {
    this.emailId = data.emailId
    this.passwrd = data.passwrd
    console.log(data.emailId);
    console.log(data.passwrd);
    

    
  }


}
