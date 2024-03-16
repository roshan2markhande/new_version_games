import { Component, OnInit } from '@angular/core';
import { UpcomingGamesService } from '../../services/upcoming-games.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-frature',
  standalone: true,
  imports: [NgFor],
  templateUrl: './frature.component.html',
  styleUrl: './frature.component.scss'
})
export class FratureComponent implements OnInit {
    upcomingGames: any[] = [];
  
    constructor(private upcomingGamesService: UpcomingGamesService) { }
  
    ngOnInit(): void {
      this.upcomingGames = this.upcomingGamesService.getUpcomingGames();
    }
    setAlert(game: any): void {
      this.upcomingGamesService.setAlert(game);
    }
  }