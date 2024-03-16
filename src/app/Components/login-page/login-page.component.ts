import { Component } from '@angular/core';
import { FootersComponent } from '../footers/footers.component';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MsgBoxComponent } from '../msg-box/msg-box.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FootersComponent,RouterLink,RouterOutlet,MsgBoxComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  l_mode:boolean=true;
  l_prompt:any='';
prompt=()=> {

if(this.l_mode==true) {
  this.l_prompt='Name';
} else {
  this.l_prompt="User Name"
}
return this.l_prompt;
}
errorMessage:string='hello world';
clearErrorMessage() {
  this.errorMessage='';
}
}
