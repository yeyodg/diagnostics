import { Component, Inject, DoCheck } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'dg-root',
  templateUrl: './app.component.html',
  styles: [`
    .absoluteFooter {
      position: absolute;
      position:absolute;
      bottom:0;
      width:100%;
    }
  `]
})
export class AppComponent implements DoCheck {
  private scroll: boolean = false;
  constructor (@Inject(DOCUMENT) private document: Document) {}


  ngDoCheck () {
    this.scroll = document.body.clientHeight < window.outerHeight;
  }


}
