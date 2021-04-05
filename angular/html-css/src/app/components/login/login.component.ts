import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: string;
  pass!: string;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  login() {
    localStorage.setItem('login', this.user);
    this.router.navigate(['game']);
    console.log(this.user);
    console.log(this.pass);
  }
}
