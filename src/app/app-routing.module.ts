import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { GameDetailsComponent } from './game-bookshelf/game-details/game-details.component';
import { GameBookshelfFormComponent } from './game-bookshelf/game-bookshelf-form/game-bookshelf-form.component';
import { GameBookshelfHomeComponent } from './game-bookshelf/game-bookshelf-home/game-bookshelf-home.component';
import { GameBookshelfComponent } from './game-bookshelf/game-bookshelf.component';
import { LibraryComponent } from './game-library/game-library.component';

const routes: Routes = [
  { path: "", redirectTo: "/bookshelf", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "game-bookshelf",
    loadChildren: () =>
      import("./game-bookshelf/game-bookshelf.module").then(m => m.GameBookshelfModule)
  },
  {
    path: "game-library",
    loadChildren: () =>
      import("./game-library/game-library.module").then(m => m.LibraryModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
