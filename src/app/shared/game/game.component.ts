import { Component,Input, OnInit } from '@angular/core';
import { Game } from "./game.model";
import { GameBookshelfService } from "../../game-bookshelf/game-bookshelf.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input () gameDetails: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
