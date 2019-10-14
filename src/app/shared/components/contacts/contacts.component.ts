import { Component, OnInit } from '@angular/core';
import { checkMobile } from '../../../helpers/check-mobile';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  isMobile: boolean = checkMobile();

  constructor() { }

  ngOnInit() {
    console.log(this.isMobile);

  }

}
