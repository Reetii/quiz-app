import {Component, OnInit, OnDestroy} from '@angular/core';
import { QuestionsService } from '../questions.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {SharingService } from '../sharing.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [QuestionsService]

})
export class SecondComponent implements OnInit, OnDestroy {
 items:any;
 public value2 = "Not attempted";
 options:any;
 public ticks2:any = 0;
 private subscription: Subscription;
 constructor(private _questions:QuestionsService,public _sharingService:SharingService) {
   this._questions.gquestion().subscribe(items => {
   this.items =items.questions;
   this.options = items.questions[1].options;


 });
}
ngOnInit() {
    let timer = TimerObservable.create(1000, 1000);
    this.subscription = timer.subscribe(ticks2 => {
      this.ticks2 = ticks2;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log(this.ticks2);
   this._sharingService.setVal2(this.value2);
    this._sharingService.setTicks2(this.ticks2);

  }

}
