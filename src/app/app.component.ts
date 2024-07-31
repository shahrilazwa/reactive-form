import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'reactive-form';
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  ngOnInit():void {
    this.signUpForm = new FormGroup ({
      'username':new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5)
      ]),
      'email':new FormControl(null,Validators.required),
      'gender':new FormControl(null)
    });
    this.patchDataUsername();
  }

  patchDataUsername() {
    this.signUpForm.patchValue({
    'username':'Roslan'
    });
  }

  onSubmit() {
    console.log("form submitted"),
    console.log(this.signUpForm)
  }
}


