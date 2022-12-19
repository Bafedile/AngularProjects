import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: string = '';
  defaultQuestion = 'teacher';
  genders = ['male', 'female'];
  @ViewChild('f') form: NgForm;

  user= {
    username: '',
    email: '',
    gender: '',
    secretQuestion: '',
    answer: '',

  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: '',
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    //   }
    // })

    this.form.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  onSubmit() {
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.gender = this.form.value.userData.gender;
    this.user.secretQuestion = this.form.value.userData.secret;
    this.user.answer = this.form.value.userData.answer;
    this.form.reset();
  }
}
