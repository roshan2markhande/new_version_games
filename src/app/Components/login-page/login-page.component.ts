import { Component } from '@angular/core';
import { FootersComponent } from '../footers/footers.component';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { NgModel,NgControl,NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FootersComponent,RouterLink,RouterOutlet,MsgBoxComponent,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  credintial:any={};

constructor(private http:HttpClient){}
  onSubmit(){
    this.http.post('http://127.0.0.1:8080/singin',this.credintial).subscribe((credintial:any)=>{
      console.log('User submitted:', this.credintial);
     });
  }

errorMessage:string='hello world';
clearErrorMessage() {
  this.errorMessage='';
}
}
