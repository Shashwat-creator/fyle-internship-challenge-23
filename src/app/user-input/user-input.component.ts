// user-input.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() search = new EventEmitter<string>();

  username: string = '';

  onSubmit() {
    this.search.emit(this.username);
  }
}
