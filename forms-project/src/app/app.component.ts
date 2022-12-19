import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  subscriptions = [
    'Basic', 'Advanced', 'Pro'
  ]
  subValue = 'Basic';
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  constructor() { }

  onSubmit() {
    this.user.email = this.form.value.userData.email;
    this.user.subscription = this.form.value.userData.subscription;
    this.user.password = this.form.value.userData.password;
    this.form.reset();
  }
}
