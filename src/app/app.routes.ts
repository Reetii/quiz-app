import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'third',
    component: ThirdComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }

];
export const routing = RouterModule.forRoot(routes);
