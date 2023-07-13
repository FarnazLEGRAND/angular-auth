import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../entities';


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
constructor(private authService:AuthService){}

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
    complete:() => this.feedback ='Registration complete.',
    error: () => this.feedback = 'User already exists'
  });
} else {
  this.authService.login(this.user).subscribe({
    complete:() => this.feedback ='Login successful.',
    error: () => this.feedback = 'Credentials error'
  });
}
}

}