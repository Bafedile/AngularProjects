import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private activatedSub: Subscription;
  userActivated = false;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.activatedEmitter.subscribe((userActivated) => {
      this.userActivated = userActivated;
    })
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
