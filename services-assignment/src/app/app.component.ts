import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UsersService]
})
export class AppComponent implements OnInit{
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
  onSetToInactive(id: number) {
    console.log('set to inactive');
    this.usersService.setToActive(id);
   
  }

  onSetToActive(id: number) {
    console.log('set to active');
    this.usersService.setToInactive(id);
 
  }
}
