import { Component, OnInit } from '@angular/core';

import { GameshelfService } from '../../game-bookshelf/game-bookshelf.service';
import { Game } from '../game/game.model';

@Component({
  selector: "app-notification-modal",
  templateUrl: "./notification-modal.component.html",
  styleUrls: ["./notification-modal.component.css"]
})
export class NotificationModalComponent implements OnInit {
  gameData: Game;

  constructor(private gsService: GameshelfService) {}

  ngOnInit(): void {
    this.gsService.gameAddedEmitter.subscribe((recentBook: Game) => {
      this.gameData = recentBook;

      setTimeout(() => (this.gameData = null), 1750);
    });
  }
}
