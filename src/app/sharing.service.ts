import {Injectable} from '@angular/core';

@Injectable()
export class SharingService {

    private val1:any;
    private ticks1:any;
    private val2:any;
    private ticks2:any;
    private val3:any;
    private ticks3:any;
///-------------------------------------------------------------------------///
    setVal1(value) {
        this.val1 = value;
    }

    getVal1() {
        return this.val1;
    }
    setTicks1(t) {
        this.ticks1 = t;
    }

    getTicks1() {
        return this.ticks1;
      }

  //-------------------------------------------------------------------------------------//
    setVal2(value) {
          this.val2 = value;
      }

      getVal2() {
          return this.val2;
      }
      setTicks2(t) {
          this.ticks2 = t;
      }

      getTicks2() {
          return this.ticks2;
        }
        //--------//---------------------------------------------///


setVal3(value) {
    this.val3 = value;
}

getVal3() {
    return this.val3;
}
setTicks3(t) {
    this.ticks3 = t;
}

getTicks3() {
    return this.ticks3;
}

    constructor(){

    }
}
