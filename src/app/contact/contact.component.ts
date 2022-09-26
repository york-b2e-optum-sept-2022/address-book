import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onUpdate = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onDeleteClick() {
    this.onDelete.emit(this.contact.id);
  }

  onUpdateClick() {
    this.onUpdate.emit(this.contact.id);
  }

}
