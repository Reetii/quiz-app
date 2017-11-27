import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from '../app.routes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  startQuiz(first: string){
    this.router.navigate(['first']);
  }

  ngOnInit() {
  }

}
