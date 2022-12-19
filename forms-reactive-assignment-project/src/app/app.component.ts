import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectStatuses = ['Stable', 'Critical', 'Finished'];
  form: FormGroup;


  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.projectNameAsyncValidator),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable', [Validators.required])
    });
    // this.form = new FormGroup({
    //   'projectName': new FormControl(null, this.projectNameAsyncValidator.bind(this)),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'status': new FormControl('Stable', [Validators.required])
    // });

    this.form.statusChanges.subscribe((status)=>{
      console.log(status);
    })
  }

  onSubmit() {

  }

  projectNameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'projectNameValidated': false };
    }
    return null;
  }

  projectNameAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'projectNameValidated': false });
        } else {
          resolve(null);
        }
      }, 1000);
    });

    return promise;
  }
}
