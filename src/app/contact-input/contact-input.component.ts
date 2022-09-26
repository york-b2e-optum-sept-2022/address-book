import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() onCancel = new EventEmitter<undefined>();
  @Output() onSubmit = new EventEmitter<IContact>();

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick() {
    console.log('click')
    this.onCancel.emit();
  }

  onSubmitClick() {
    this.contact.birthday = new Date(this.contact.birthday);
    this.contact.meetingDate = new Date(this.contact.meetingDate);

    this.onSubmit.emit(this.contact)
  }

}
