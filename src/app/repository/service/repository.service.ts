import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepositoryService {

  apiUrl="https://api.github.com/users/COAB1/repos"

  constructor(
    private http: HttpClient
  ) { }

  getRepositories() {
    return this.http.get(this.apiUrl);
  }

}