import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GithubLanguage } from './github-languages';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectService {
  constructor(private _httpClient:HttpClient) { }

  getRepos() {
    return this._httpClient.get('https://api.github.com/users/sergeantfox234/repos');
  }

  getLanguages(languagesUrl?:string) {
    if (languagesUrl == null) {
      return of([]);
    }
    return this._httpClient.get(languagesUrl);
  }
}
