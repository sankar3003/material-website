import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url: string = 'https://jsonplaceholder.typicode.com/photos';
  itle = 'ng-website';
  constructor(private http: HttpClient) {}
  getNews(): Observable<any> {
    return this.http.get(this.url);
  }
}
