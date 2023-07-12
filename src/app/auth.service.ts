import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
// ici je cree une: ng g environment dossier envirenement pour mettre adress de tt le site a part
  addUser(user:User){
    return this.http.post<User>(environment.serverURL+'/api/user', user);
  }
}
