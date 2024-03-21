import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgForm,NgControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,NgIf],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  email: any;
  formSubmitted = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]);

verifyPassword(){
    this.formSubmitted = true;
    if (this.emailFormControl.invalid) {
      console.error('Form is invalid. Please fix validation errors.');
      return;
    }
}

  constructor(private http:HttpClient) {
  }
  user: any = {}; // This will store form data
  onSubmit() {  
    this.verifyPassword();
  this.http.post('http://127.0.0.1:8080/register',this.user).subscribe((user:any)=>{
      console.log('User submitted:', this.user);
     });
   }
   get emailField() {
    return this.emailFormControl;
  }
  } 
