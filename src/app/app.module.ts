import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBookshelfComponent } from './game-bookshelf/game-bookshelf.component';
import { GameDetailsComponent } from './game-bookshelf/game-details/game-details.component';
import { GameBookshelfFormComponent } from './game-bookshelf/game-bookshelf-form/game-bookshelf-form.component';
import { GameBookshelfHomeComponent } from './game-bookshelf/game-bookshelf-home/game-bookshelf-home.component';
import { SavedGameListComponent } from './game-bookshelf/saved-game-list/saved-game-list.component';
import { GameBookshelfModule } from './game-bookshelf/game-bookshelf.module';
import { LibraryComponent } from './library/library.component';
import { ApiResultListComponent } from './game-library/api-result-list/api-result-list.component';
import { GameSearchBarComponent } from './game-library/game-search-bar/game-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBookshelfComponent,
    GameDetailsComponent,
    GameBookshelfFormComponent,
    GameBookshelfHomeComponent,
    SavedGameListComponent,
    LibraryComponent,
    ApiResultListComponent,
    GameSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameBookshelfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
