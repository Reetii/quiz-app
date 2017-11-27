import {Component, OnInit, OnDestroy} from '@angular/core';
import { QuestionsService } from '../questions.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [QuestionsService]

})
export class SecondComponent implements OnInit, OnDestroy {
 items:any;
 value2 = "Not attempted";
 options:any;
 ticks2:any;
 private subscription: Subscription;
 constructor(private _questions:QuestionsService) {
   this._questions.gquestion().subscribe(items => {
   this.items =items.questions;
   this.options = items.questions[1].options;

   console.log(this.options);

 });
}
ngOnInit() {
    let timer = TimerObservable.create(2000, 1000);
    this.subscription = timer.subscribe(ticks2 => {
      this.ticks2 = ticks2;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log(this.ticks2);
  }

}
