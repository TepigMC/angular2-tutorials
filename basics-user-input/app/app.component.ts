import { Component } from '@angular/core';

import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './key-up.components';
import { LittleTourComponent } from './little-tour.component';
import { LoopBackComponent } from './loop-back.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [
    ClickMeComponent, KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3,
    KeyUpComponent_v4, LittleTourComponent, LoopBackComponent
  ]
})
export class AppComponent { }
