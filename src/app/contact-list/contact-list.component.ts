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
  @Output() onDelete = new EventEmitter<string>();
  @Output() onUpdate = new EventEmitter<string>();

  displayList!: IContact[];
  searchText: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.displayList = [...this.list];
  }

  filterList(searchText: any) {
    this.displayList = this.list.filter((contact) => {
      return contact.name.includes(searchText);
    })
  }

  onClick() {
    this.newContact.emit();
  }

  deleteContact(id: string) {
    this.onDelete.emit(id);
  }

  updateContact(id: string) {
    this.onUpdate.emit(id);
  }

}
