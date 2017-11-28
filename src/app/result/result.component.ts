import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']

})
export class ResultComponent implements OnInit {
  public values:any =  [];
  public ticks:any = [];
  public options:any = [];

  constructor(_sharingService: SharingService) {
    this.values.push(_sharingService.getVal1());
    console.log(this.values[0]);
    this.ticks.push(_sharingService.getTicks1());
    console.log(this.ticks[0]);
    this.values.push(_sharingService.getVal2());
    console.log(this.values[1]);
    this.ticks.push(_sharingService.getTicks2());
    console.log(this.ticks[1]);
    this.values.push(_sharingService.getVal3());
    console.log(this.values[2]);
    this.ticks.push(_sharingService.getTicks3());
    console.log(this.ticks[2]);

    
  }



  ngOnInit() {
  }

}
