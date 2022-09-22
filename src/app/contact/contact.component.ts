import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
  }

}
