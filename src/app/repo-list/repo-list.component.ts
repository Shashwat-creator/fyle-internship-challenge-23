// repo-list.component.ts
// repo-list.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent {
  @Input() repositories: any[] = [];
  @Output() pageChange=new EventEmitter<number>();
  currentPage: number = 1;
  itemsPerPage: number = 10;
  maxItemsPerPage: number = 100;
  loading: boolean = false;
  onPageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
  onItemsPerPageChange() {
    this.pageChange.emit(this.currentPage);
  }
}



