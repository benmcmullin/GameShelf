import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { ApiResultListComponent } from './api-result-list/api-result-list.component';
import { GameSearchBarComponent } from './game-search-bar/game-search-bar.component';
import { LibraryComponent } from './game-library.component';

@NgModule({
  declarations: [
    LibraryComponent,
    GameSearchBarComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "", component: LibraryComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class LibraryModule {}
