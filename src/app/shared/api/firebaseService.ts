import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Game } from '../game/game.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  fetchGamesFromFirebase() {
    return this.http.get(environment.firebase.dbGames + '.json', {});
  }

  saveGametoFirebase(gameDetails: Game) {
    this.http
      .post(environment.firebase.dbGames + '.json', gameDetails, {})
      .subscribe();
  }

  updateGameInFirebase(gameId: string, gameDetails: Partial<Game>) {
    this.http
      .patch(environment.firebase.dbGames + '/' + gameId + '.json', {
        ...gameDetails,
      })
      .subscribe();
  }

  deleteGameFromFirebase(gameId: string) {
    this.http
      .delete(environment.firebase.dbGames + '/' + gameId + '.json', {})
      .subscribe();
  }
}
