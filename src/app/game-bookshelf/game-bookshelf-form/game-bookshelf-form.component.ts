import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: "app-game-bookshelf-form",
  templateUrl: "./game-bookshelf-form.component.html",
  styleUrls: ["./game-bookshelf-form.component.css"]
})
export class GameBookshelfFormComponent implements OnInit {
  isEditMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((newParams: Params) => {
      this.isEditMode = !!newParams.id;
    });
  }
}
