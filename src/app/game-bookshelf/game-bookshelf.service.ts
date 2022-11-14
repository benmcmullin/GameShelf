import { Subject } from 'rxjs';
import { objectToArray } from 'src/utils/objectToArray';

import { Injectable } from '@angular/core';

import { FirebaseService } from '../shared/api/firebaseService';
import { Game } from '../shared/game/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameshelfService {

  gameSelected = new Subject<Game>();
  gameListChanged = new Subject<Game[]>();
  gameAddedEmitter = new Subject<Game>();

  private bsServiceGames: Game[] = [];

  constructor(private firebase: FirebaseService) {}

  saveSingleGame(gameDetails: Game) {
    this.firebase.saveGametoFirebase(gameDetails);

    this.bsServiceGames.push({ ...gameDetails });

    this.gameAddedEmitter.next({ ...gameDetails });

    this.gameListChanged.next(this.bsServiceGames.slice());
  }

  getGamesFromFirebase() {
    this.firebase.fetchGamesFromFirebase().subscribe((response: any) => {
      if (response) {
        const arrayOfGames = objectToArray(response);

        this.bsServiceGames = arrayOfGames;

        this.gameListChanged.next(this.bsServiceGames);
      }
    });
  }


  getAllGames() {
    this.getGamesFromFirebase();

    return this.bsServiceGames.slice();
  }

  getSingleGame(id: string) {
    const game = this.bsServiceGames.slice().find((game) => game.genre === id);

    return game;
  }

  getGameByTitle(title: string) {
    const game = this.bsServiceGames
      .slice()
      .find((game) => game.title === title);

    return game;
  }

  updateSingleGame(id: string, gameDetails: Partial<Game>) {
    this.firebase.updateGameInFirebase(id, gameDetails);

    this.bsServiceGames = this.bsServiceGames.map((game) => {
      if (game.genre === id) {
        return { ...game, ...gameDetails };
      } else {
        return game;
      }
    });

    this.gameListChanged.next(this.bsServiceGames.slice());
  }

  deleteSingleGame(id: string) {
    this.firebase.deleteGameFromFirebase(id);

    this.bsServiceGames = this.bsServiceGames.filter((b) => b.genre !== id);

    this.gameListChanged.next(this.bsServiceGames.slice());
  }

  deleteSingleGameByTitle(title: string) {
    const gameToDel = this.bsServiceGames.find((b) => b.title === title);

    this.firebase.deleteGameFromFirebase(gameToDel.genre);

    this.bsServiceGames = this.bsServiceGames.filter((b) => b.title !== title);

    this.gameListChanged.next(this.bsServiceGames.slice());
  }

  setGames(games: Game[] | []) {
    console.log('%c  games: ', 'color: red;', games);

    this.bsServiceGames = games || [];
    this.gameListChanged.next(this.bsServiceGames.slice());
}
}
