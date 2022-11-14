import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Game } from '../../shared/game/game.model';
import { GameshelfService } from '../game-bookshelf.service';

@Component({
  selector: "app-game-details",
  templateUrl: "./game-details.component.html",
  styleUrls: ["./game-details.component.css"]
})
export class GameDetailsComponent implements OnInit {
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bsService: GameshelfService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((newParams: Params) => {
      this.game = this.bsService.getSingleGame(newParams.id as string);
    });
  }

  openEditGame() {
    this.router.navigate(["../", this.game.genre, "edit"], {
      relativeTo: this.route
    });
  }

  onRemoveGame() {
    this.bsService.deleteSingleGame(this.game.genre);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
