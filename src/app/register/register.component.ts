import { Component } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
user:User={email:'',password:''};
feedback=''
isLogin =false;
// repeat hamoun password2 ast
repeat="";
constructor(private authService:AuthService, private location:Location){}

  onSubmit(){
//     this.authService.addUser(this.user).subscribe(()=>this.feedback='subcription sucess')
//   }
// }
// exo faire avec material.angular formulaire


//   this.authService.addUser(this.user).subscribe({
//     complete:() => this.feedback ='Registration complete.',
//     error: () => this.feedback = 'User already exists'
//   });
// }

if(!this.isLogin) {

  this.authService.addUser(this.user).subscribe({
    complete:() => {this.feedback ='Registration complete.'; this.isLogin = true},
    error: () => this.feedback = 'User already exists'
  });
} else {
  this.authService.login(this.user).subscribe({
    complete:() => this.location.back(),
    error: () => this.feedback = 'Credentials error'
  });
}
}

}