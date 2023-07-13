import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// on est ubliger mettre notre Authservice en public
constructor(public authService:AuthService){}
// ajouter get user par symfony Token
checkIfLogged() {
  this.authService.getUser().subscribe(data => console.log(data));
}
}