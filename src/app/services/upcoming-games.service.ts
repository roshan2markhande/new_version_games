import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpcomingGamesService {
  private upcomingGames: any[] = [
    { id: 1, title: 'Game 1', date: '2024-03-20', platform: 'PC' },
    { id: 2, title: 'Game 2', date: '2024-04-10', platform: 'PlayStation 5' },
    // Add more games as needed
  ];

  constructor() { }

  getUpcomingGames(): any[] {
    return this.upcomingGames;
  }

  setAlert(game: any): void {
    // Implement alert logic here (e.g., send notification, store in database)
    console.log('Alert set for:', game);
  }
}
