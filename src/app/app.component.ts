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
      'username':new FormControl(null, Validators.required),
      'email':new FormControl(null),
      'gender':new FormControl(null)
    });
  }

  onSubmit() {
    console.log("form submitted"),
    console.log(this.signUpForm)
  }
}


