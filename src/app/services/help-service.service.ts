import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {
  private articles: any[] = [
    { id: 1, title: 'Getting Started', content: 'This is a guide to getting started with our application.' },
    { id: 2, title: 'FAQs', content: 'Frequently asked questions about our application.' },
    { id: 3, title: 'Troubleshooting', content: 'Common issues and their solutions.' },
    // Add more articles as needed
  ];

  constructor() { }

  getArticles(): any[] {
    return this.articles;
  }

  getArticleById(id: string): any {
    return this.articles.find(article => article.id === +id);
  }

}
