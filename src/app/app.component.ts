import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showFiller:boolean= false;
  newsData: any = [];
  constructor(public newsService: NewsService) {}
  ngOnInit() {}
}
