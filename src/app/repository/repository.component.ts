import { Component, OnInit } from '@angular/core';
import { Repository } from './service/repository';
import { RepositoryService } from './service/repository.service'


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repository = new Repository();
  repositories: Repository[] = [];

  constructor(
    private repositoryService: RepositoryService,
  ) { }

  ngOnInit(): void {
    this.repositoryService.getRepositories().subscribe(repositories => {
      console.log(repositories);
    });
  }

}
