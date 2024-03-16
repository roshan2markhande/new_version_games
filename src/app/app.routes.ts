import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {FootersComponent}  from './Components/footers/footers.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { MsgBoxComponent } from './Components/msg-box/msg-box.component';
import { HomeComponent} from './Components/home/home.component';
import { HelpBtComponent } from './Components/help-bt/help-bt.component';
import { ArticleComponent } from './Components/article/article.component';
import { FratureComponent } from './Components/frature/frature.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{path:'login',title:'Login Page',component:LoginPageComponent},
{path:"sing-up",title:'Sing Up Page',component:SingUpComponent},
{path:"side-bar",title:'Side bar',component:SideBarComponent},
{path:"footer",title:'Footer',component:FootersComponent},
{path:"msg-box",title:'Message',component:MsgBoxComponent},
{path:"home",title:'Home',component:HomeComponent},
{ path: '', redirectTo: '/help', pathMatch: 'full' },
{path:"help_bt",title:'Help',component:HelpBtComponent},
{path:'article/:id',title:'Help',component:ArticleComponent},
{path:"frature",title:'Features',component:FratureComponent},
{path:"profile",title:'Features',component:ProfileComponent},
{path:"editProfile",title:'Features',component:EditProfileComponent},
{path:"changePassword",title:'Features',component:ChangePasswordComponent},
{path:"forgetPassword",title:'Features',component:ForgetPasswordComponent},
]
