import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { groupBy } from "rxjs/operator/groupBy";

@Component({
  selector: "app-contract-form",
  templateUrl: "./contract-form.component.html",
  styleUrls: ["./contract-form.component.css"],
})
export class ContractFormComponent implements OnInit {
  contractForm;

  constructor(private formBuilder: FormBuilder) {
    this.contractForm = this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.maxLength(10)]],
      lastname: ["", [Validators.required, Validators.maxLength(10)]],
      email: ["", [Validators.required, Validators.email]],
      gender: ["", [Validators.required]],
      isMarried: [""],
      country: ["", Validators.required],
      address: this.formBuilder.group({
        city: ["", Validators.required],
        street: ["", Validators.required],
        pincode: ["", Validators.required],
      }),
    });
  }

  get firstname() {
    return this.contractForm.get("firstname");
  }
  get lastname() {
    return this.contractForm.get("lastname");
  }
  get email() {
    return this.contractForm.get("email");
  }
  get gender() {
    return this.contractForm.get("gender");
  }
  get isMarried() {
    return this.contractForm.get("isMarried");
  }
  get country() {
    return this.contractForm.get("country");
  }

  get city() {
    return this.contractForm.get("address").get("city");
  }
  get street() {
    return this.contractForm.get("address").get("street");
  }
  get pincode() {
    return this.contractForm.get("address").get("pincode");
  }

  onSubmit() {
    console.log(this.contractForm.value);
  }

  ngOnInit() {}
}
