
import { Component } from '@angular/core';
import { GithubService } from './github.service';

interface Repository {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repositories: Repository[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  username: string = ''; // Declare username property

  constructor(private githubService: GithubService) {}

  onSearch(username: string) {
    this.username = username; // Assign the entered username
    this.loadRepositories(this.username, this.currentPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadRepositories(this.username, this.currentPage);
  }

  private loadRepositories(username: string, page: number) {
    this.githubService.getUserRepositories(username, page, this.itemsPerPage)
      .subscribe((repos: Repository[]) => {
        this.repositories = repos;
      });
  }
}

