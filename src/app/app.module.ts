import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { GameCreateComponent } from './game-bookshelf/game-bookshelf-form/game-create/game-create.component';
import { GameBookshelfComponent } from './game-bookshelf/game-bookshelf.component';
import { GameUpdateComponent } from './game-bookshelf/game-bookshelf-form/game-update/game-update.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotificationModalComponent } from './shared/notification-modal/notification-modal.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotificationModalComponent, GameCreateComponent, GameBookshelfComponent, GameUpdateComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
