import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../entities';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  list:User[] = []
  displayedColumns = ['id', 'email', 'password', 'role'];
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => this.list = data);
  }

  
}