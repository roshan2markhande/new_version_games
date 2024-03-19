import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {
  users: any = [];

constructor(private dataService:UserDataService) {
}
  ngOnInit() {
   this.getData()
  }
  getData():void {
    this.dataService.getData().subscribe(users => {
      this.users=users;
    });
  }
}

    