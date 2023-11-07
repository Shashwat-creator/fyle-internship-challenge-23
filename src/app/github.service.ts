import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepositories(username: string, page: number,perPage:number): Observable<any[]> {
    const params = new HttpParams()
    .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/repos`);
  }
}
