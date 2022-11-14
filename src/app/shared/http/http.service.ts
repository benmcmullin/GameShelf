import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GameshelfService } from "./../../game-bookshelf/game-bookshelf.service";
import { Game } from "../game/game.model";

@Injectable({
  providedIn: "root"
})
export class HTTPService {

  firebaseRootURL =
    "https://gameshelf-project-default-rtdb.firebaseio.com/games.json";

  constructor(
    private http: HttpClient,
    private gameshelfService: GameshelfService
  ) {}

   saveGamesToFirebase() {
    const games = this.gameshelfService.getAllGames();

    this.http.put(this.firebaseRootURL, games).subscribe(res => {
      console.log("Firebase DB Response:", res);
    });
  }

  // *METHOD* - Fetch books from Firebase DB
  fetchGamesFromFirebase() {
    return this.http
      .get(this.firebaseRootURL, {})
      .subscribe((res: Game[] | []) => {
        this.gameshelfService.saveSingleGame(res);
      });
  }
}

