import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>(environment.serverURL+'/api/user');
  }
}