import { Component } from '@angular/core';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [EditProfileComponent,RouterOutlet,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
