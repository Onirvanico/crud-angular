import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.userService.users()
      .subscribe({
        next: (dataSource: User[]) => {
          this.users = dataSource;
          console.log(dataSource);
        },
        error: err => console.log(err)
      })
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe({
        next: response => {
          console.log(response);
          this.retrieveUsers();
      },error: err => console.log(err)
    });
  }
}
