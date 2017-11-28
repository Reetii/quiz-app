import {Component, OnInit, OnDestroy} from '@angular/core';
import { QuestionsService } from '../questions.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {SharingService } from '../sharing.service';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [QuestionsService]

})
export class FirstComponent implements OnInit, OnDestroy {
 items:any;
 public value1 = "Not attempted";
 options:any;
 public ticks1:any = 0;
 public totalticks1:any = 0;
 private subscription: Subscription;
 constructor(private _questions:QuestionsService, public _sharingService:SharingService) {
   this._questions.gquestion().subscribe(items => {
   this.items =items.questions;
   this.options = items.questions[0].options;


 });


}


ngOnInit() {
    let timer = TimerObservable.create(1000, 1000);
    this.subscription = timer.subscribe(ticks1 => {
      this.ticks1 = this.totalticks1 + ticks1;

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.totalticks1 = this.totalticks1 + this.ticks1;
    console.log(this.totalticks1);
    this._sharingService.setVal1(this.value1);
    this._sharingService.setTicks1(this.ticks1);
  }




}
