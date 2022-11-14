import { Component, OnInit } from '@angular/core';

import { GameshelfService } from '../../game-bookshelf/game-bookshelf.service';
import { Game } from '../game/game.model';

@Component({
  selector: "app-notification-modal",
  templateUrl: "./notifcation-modal.component.html",
  styleUrls: ["./notifcation-modal.component.css"]
})
export class NotificationModalComponent implements OnInit {
  bookData: Game;

  constructor(private bsService: GameshelfService) {}

  ngOnInit(): void {
    this.bsService.gameAddedEmitter.subscribe((recentBook: Game) => {
      this.bookData = recentBook;

      setTimeout(() => (this.bookData = null), 1750);
    });
  }
}
