import { Component } from '@angular/core';
import { FootersComponent } from '../footers/footers.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { GamePageComponent } from '../game-page/game-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FootersComponent,SlickCarouselModule,NgFor,GamePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {
  images = [  
    { img: "../assets/images/img1.jpg"},  
    { img: "../assets/images/img2.jpg"},  
    { img: "../assets/images/img3.jpg"},  
    { img: "../assets/images/img4.jpg"},  
    { img: "../assets/images/img5.jpg"},  
    { img: "../assets/images/img6.jpg"},  
    { img: "../assets/images/img7.jpg"}

  ];  
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };  
}
