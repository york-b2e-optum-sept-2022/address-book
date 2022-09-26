import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {

  @Input() list!: IContact[]; // data coming form the parent component
  @Output() newContact = new EventEmitter<undefined>(); // sending data to the parent component
  @Output() onDelete = new EventEmitter<string>(); // sending data to the parent component
  @Output() onUpdate = new EventEmitter<string>(); // sending data to the parent component

  displayList!: IContact[];
  searchText: string = "";

  constructor() {}

  ngOnInit(): void {
    this.displayList = [...this.list];
  }

  ngOnChanges(changes: SimpleChanges) {
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
