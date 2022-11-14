import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthRes } from './auth.types';

type authMode = "LOGIN" | "REGISTER";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  mode: authMode = "LOGIN";

  authObservable: Observable<AuthRes>;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}


  onAuth(form: NgForm) {
    if (!form.valid) return;

    const { email, password } = form.value;

    if (this.mode === "REGISTER") {

      this.authObservable = this.auth.signUp(email, password);
    } else {

      this.authObservable = this.auth.signIn(email, password);
    }

    this.authObservable.subscribe({
      next: () => this.router.navigate(["game-bookshelf"]),
      error: error => alert(error.message)
    });

    form.reset();
  }
}
