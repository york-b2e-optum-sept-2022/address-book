import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  contact: IContact = {
    id: -1,
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    birthday: new Date(),
    meetingDate: new Date(),
    relation: "",
    company: "",
    notes: "",
  };

  @Output() onCancel = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick() {
    console.log('click')
    this.onCancel.emit();
  }

  onSubmit() {
    console.log(this.contact)
  }

}
