import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectService {
  constructor(private _httpClient:HttpClient) { }

  getRepos() {
    return this._httpClient.get('https://api.github.com/users/sergeantfox234/repos');
  }
}
