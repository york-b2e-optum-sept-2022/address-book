import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onDeleteClick() {
    this.dataService.deleteContact(this.contact.id);
  }

  onUpdateClick() {
    this.dataService.setSelectedContact(this.contact.id);
  }

}
