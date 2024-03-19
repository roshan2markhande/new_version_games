import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://127.0.0.1:8080/getData'; 
  constructor(private http:HttpClient) { }
  getData():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
    
  }
}
