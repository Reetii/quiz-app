import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {

  constructor(private _http:Http) {
  console.log("Questions service init..");
}
gquestion(){
  return this._http.get('https://api.myjson.com/bins/blxqf').map(res => res.json());
}

}
