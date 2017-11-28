import { Component } from '@angular/core';
import { SharingService } from './sharing.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ResultComponent } from './result/result.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharingService]
})
export class AppComponent {
  title = 'app';
}
