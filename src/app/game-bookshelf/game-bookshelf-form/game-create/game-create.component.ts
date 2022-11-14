import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GameshelfService } from '../../game-bookshelf.service';

@Component({
  selector: "app-game-create",
  templateUrl: "./game-create.component.html",
  styleUrls: ["./game-create.component.css"]
})
export class GameCreateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bsService: GameshelfService
  ) {}

  ngOnInit(): void {}

  onCreateGame(formObj: NgForm) {
    const { title, developer, coverImagePath } = formObj.value;

    this.bsService.saveSingleGame({ title, developer, coverImagePath });

    this.onReset(formObj);
  }

  onReset(form: NgForm) {
    form.reset();

    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
