import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './entities';
import { environment } from 'src/environments/environment';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// baraye TOKEN:az symfony yek token migire touye local neshoun mideh
logged:User|null = localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')!):null;

constructor(private http:HttpClient) { }

// ici je cree une: ng g environment dossier envirenement pour mettre adress de tt le site a part
addUser(user:User) {
  return this.http.post<User>(environment.serverURL+'/api/user', user);
}

// token baz login
login(user:User) {
  return this.http.post<{token:string}>(environment.serverURL+'/api/login', user).pipe(
    tap(data => {
      localStorage.setItem('token', data.token);
    }),
    switchMap(() => this.getUser()),
    tap(data => {
      this.logged = data;
      localStorage.setItem('logged', JSON.stringify(data));
    })
  );
}

getUser() {
  return this.http.get<User>(environment.serverURL + '/api/protected');
}

logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('logged');
  this.logged =null;
}
}