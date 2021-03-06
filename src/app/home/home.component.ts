import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginPage(): void {
    this.router.navigateByUrl("/login")
  }

  aboutPage(): void {
    this.router.navigateByUrl("/about")
  }
}
