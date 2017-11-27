import {Component, OnInit, OnDestroy} from '@angular/core';
import { QuestionsService } from '../questions.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [QuestionsService]

})
export class FirstComponent implements OnInit, OnDestroy {
 items:any;
 value1 = "Not attempted";
 options:any;
 ticks1:any;
 private subscription: Subscription;
 constructor(private _questions:QuestionsService) {
   this._questions.gquestion().subscribe(items => {
   this.items =items.questions;
   this.options = items.questions[0].options;

   console.log(this.options);

 });
}
ngOnInit() {
    let timer = TimerObservable.create(2000, 1000);
    this.subscription = timer.subscribe(ticks1 => {
      this.ticks1 = ticks1;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log(this.ticks1);
  }

}
