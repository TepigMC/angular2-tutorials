import { Component } from '@angular/core';

import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './key-up.components';
import { LittleTourComponent } from './little-tour.component';
import { LoopBackComponent } from './loop-back.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>User Input</h1>
    <h2>Bind to click</h2>
    <click-me></click-me>
    <h2>Bind to keyup</h2>
    <h3>Get user input from the $event object</h3>
    <key-up1></key-up1>
    <h3>Get user input from a template reference variable</h3>
    <loop-back></loop-back>
    <key-up2></key-up2>
    <h3>Key event filtering (with key.enter)</h3>
    <key-up3></key-up3>
    <h3>On blur</h3>
    <key-up4></key-up4>
    <h2>Little Tour of Heroes</h2>
    <little-tour></little-tour>
  `,
  directives: [
    ClickMeComponent, KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3,
    KeyUpComponent_v4, LittleTourComponent, LoopBackComponent
  ]
})
export class AppComponent { }
