import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users = [];
  inActiveCounter = 0;
  constructor(private usersService: UsersService,private counterService:CounterService) { 
    this.inActiveCounter = this.counterService.inActiveCounter;
  }

 
  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.inActiveCounter = this.counterService.inActiveCounter;
  }
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.incrementActiveCounter();
    
  }
}
