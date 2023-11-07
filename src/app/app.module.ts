// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { RepoListComponent } from './repo-list/repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
