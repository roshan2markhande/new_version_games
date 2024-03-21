import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {FootersComponent}  from './Components/footers/footers.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { MsgBoxComponent } from './Components/msg-box/msg-box.component';
import { HomeComponent} from './Components/home/home.component';
import { HelpBtComponent } from './Components/help-bt/help-bt.component';
import { FratureComponent } from './Components/frature/frature.component';
import { GamePageComponent } from './Components/game-page/game-page.component';
import { NgOptimizedImage } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf,NgFor,NgSwitch,NgClass } from '@angular/common';
import { ArticleComponent } from './Components/article/article.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginPageComponent,RouterLink,HelpBtComponent,FratureComponent,HomeComponent,ArticleComponent,UserTableComponent,
    SideBarComponent,FootersComponent,NgIf,NgFor,NgSwitch,NgClass,ForgetPasswordComponent,ChangePasswordComponent,EditProfileComponent,ProfileComponent,
    SingUpComponent,MsgBoxComponent,NgOptimizedImage,MatIconModule,GamePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cloud_Gaming';
  loggedI:boolean=true;
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    // Implement isLoggedIn() method based on your authentication service
    return this.authService.isLoggedIn();
  }

  getUsername(): string {
    // Implement getUsername() method based on your authentication service
    return this.authService.getUsername();
  }

  goToProfile(): void {
    this.router.navigate(['/profile']); // Navigate to profile page
  }

  signOut(): void {
    this.authService.logout(); // Call signOut() method from your authentication service
  }
}
