import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { HelpServiceService } from '../../services/help-service.service';
import { NgFor } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-help-bt',
  standalone: true,
  imports: [ArticleComponent,RouterOutlet,RouterLink,NgFor],
  templateUrl: './help-bt.component.html',
  styleUrl: './help-bt.component.scss'
})
export class HelpBtComponent  implements OnInit {

  articles: any[] | undefined;

  constructor(private helpService: HelpServiceService) { }

  ngOnInit(): void {
    this.articles = this.helpService.getArticles();
  }

}
