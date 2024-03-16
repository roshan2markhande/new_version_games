import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {
  users: any = {};

constructor(private http:HttpClient) {
}
  ngOnInit() {
  this.http.get('http://127.0.0.1:8080/getUserData',this.users).subscribe((user:any)=>{
    console.log(this.users);
  });
}
  }

    