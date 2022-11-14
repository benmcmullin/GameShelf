import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-game-bookshelf',
  templateUrl: './game-bookshelf.component.html',
  styleUrls: ['./game-bookshelf.component.css']
})
export class GameBookshelfComponent implements OnInit {
  sortBy: "title" | "developer" = "title";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openGameForm() {
    this.router.navigate(["new"], {relativeTo: this.route});
  }

  onSort() {
    this.sortBy === "title" ? (this.sortBy = "developer") : (this.sortBy = "title")
  }

}
