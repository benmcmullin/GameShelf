import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { GameshelfService } from '../../game-bookshelf.service';

@Component({
  selector: "app-game-update",
  templateUrl: "./game-update.component.html",
  styleUrls: ["./game-update.component.css"]
})
export class GameUpdateComponent implements OnInit {
  gameDetails: FormGroup;
  gameId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bsService: GameshelfService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.gameId = params.id;

      let { title, developer, coverImagePath } = this.bsService.getSingleGame(
        this.gameId
      );

      this.gameDetails = new FormGroup({
        title: new FormControl(title, Validators.required),
        developer: new FormControl(developer, Validators.required),
        coverImagePath: new FormControl(coverImagePath, Validators.required)
      });
    });
  }

  onUpdateGame() {
    const { title, developer, coverImagePath } = this.gameDetails.value;

    this.bsService.updateSingleGame(this.gameId, {
      title,
      developer,
      coverImagePath
    });

    this.onReset();
  }

  onReset() {
    this.gameDetails.reset();

    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
