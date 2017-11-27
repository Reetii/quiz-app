import {Component, OnInit, OnDestroy} from '@angular/core';
import { QuestionsService } from '../questions.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  providers: [QuestionsService]

})
export class ThirdComponent implements OnInit, OnDestroy {
 items:any;
 value3 = "Not attempted";
 options:any;
 ticks3:any;
 private subscription: Subscription;
 constructor(private _questions:QuestionsService) {
   this._questions.gquestion().subscribe(items => {
   this.items =items.questions;
   this.options = items.questions[2].options;

   console.log(this.options);

 });
}
ngOnInit() {
    let timer = TimerObservable.create(2000, 1000);
    this.subscription = timer.subscribe(ticks3 => {
      this.ticks3 = ticks3;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log(this.ticks3);
  }

}
