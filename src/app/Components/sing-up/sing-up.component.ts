import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgForm,NgControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  constructor(private http:HttpClient) {

  }
  user: any = {}; // This will store form data
  
  onSubmit() {
  this.http.post('http://127.0.0.1:8080/register',this.user).subscribe((user:any)=>{
      console.log('User submitted:', this.user);
     });
   }
  } 

