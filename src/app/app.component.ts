import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ann-site';
  top: any;
  left: any;

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 85) + "px";
    this.left = ($event.pageX - 85) + "px";
  }
}