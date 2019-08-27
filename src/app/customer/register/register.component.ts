import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      phone: ['', [Validators.pattern("[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]")]],
      notification: 'email',
      sendCatalog: true,
      addresses: this.formBuilder.array([this.addressGroup()])
    })

    this.signupForm.get('notification').valueChanges.subscribe(value => this.setNotification(value))
  }

  get addresses(): FormArray {
    return <FormArray>this.signupForm.get('addresses')
  }

  addNewAddressField() {
    this.addresses.push(this.addressGroup())
  }

  addressGroup(): FormGroup {
    return this.formBuilder.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  setNotification(notifyVia) {
    if (notifyVia === 'text') {
      this.signupForm.get('phone').setValidators([Validators.required, Validators.pattern("[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]")])
    } else {
      this.signupForm.get('phone').setValidators(Validators.pattern("[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]"))
    }
    this.signupForm.get('phone').updateValueAndValidity()
  }

  saveForm() {
    console.log(this.signupForm.value)
  }

}
