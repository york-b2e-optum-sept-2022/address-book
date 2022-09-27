import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";
import {DataService} from "../data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit, OnDestroy {

  @Input() contact!: IContact;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  onCancelClick() {
    this.dataService.cancelSelectedContact();
  }

  onSubmitClick() {
    this.contact.birthday = new Date(this.contact.birthday);
    this.contact.meetingDate = new Date(this.contact.meetingDate);
    this.dataService.onContactInputSubmit(this.contact)
  }

}
