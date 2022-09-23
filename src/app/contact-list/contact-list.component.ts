import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() list!: IContact[];
  @Output() newContact = new EventEmitter<undefined>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.list)
  }

  onClick() {
    this.newContact.emit();
  }

}
