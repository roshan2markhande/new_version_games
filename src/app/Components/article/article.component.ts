import { Component, OnInit } from '@angular/core';
import { HelpServiceService } from '../../services/help-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private helpService: HelpServiceService) { }

  ngOnInit(): void {
    const id:any = this.route.snapshot.paramMap.get('id');
    this.article = this.helpService.getArticleById(id);
  }

}
