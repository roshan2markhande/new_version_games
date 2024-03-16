import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetAuthService {
  constructor(private http: HttpClient) {}

  forgotPassword(email: string): Observable <any> {
    return this.http.post<any>('your-api-endpoint/reset-password', { email });
  }

}
