import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgForm,NgControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForgetAuthService } from '../../services/forget-auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  email: string='';

  constructor(private authService: ForgetAuthService) {}

  submitForm(): void {
    this.authService.forgotPassword(this.email)
      .subscribe(
        () => {
          // Show success message to the user
        },
        (error) => {
          // Handle error (e.g., display error message)
        }
      );
  }
}
