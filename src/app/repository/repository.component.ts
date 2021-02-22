import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './service/repository.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {

  repositories: {};

  constructor(
    private repositoryService: RepositoryService,
  ) { }

  ngOnInit(): void {
    this.repositoryService.getRepositories().subscribe(repositories => {
      /* console.log(repositories); */
      this.repositories = repositories;
    });
    
  }

}
