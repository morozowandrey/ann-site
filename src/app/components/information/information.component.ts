import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  img1: boolean = false;
  img2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
