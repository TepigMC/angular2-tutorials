import { Component } from '@angular/core';

import { ClickMeComponent } from './click-me.component';
import { LoopBackComponent } from './loop-back.component';
import { KeyUpComponent_v1,
         KeyUpComponent_v2,
         KeyUpComponent_v3,
         KeyUpComponent_v4 } from './key-up.components';
import { LittleTourComponent } from './little-tour.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    ClickMeComponent,
    LoopBackComponent,
    KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4,
    LittleTourComponent
  ]
})
export class AppComponent { }
