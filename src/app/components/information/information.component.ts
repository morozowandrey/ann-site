import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  cvImg: boolean = false;
  projectsImg: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
