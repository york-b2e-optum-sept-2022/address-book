import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IContact} from "../interfaces/IContact";
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  list: IContact[];

  displayList!: IContact[];
  searchText: string = "";

  constructor(private dataService: DataService) {
    this.list = this.dataService.contactList;
    this.displayList = [...this.list];

    this.dataService.$contactList.subscribe((newList) => {
      console.log(newList)
      this.list = newList;
      this.displayList = [...this.list];
    })
  }

  filterList(searchText: any) {
    this.displayList = this.list.filter((contact) => {
      return contact.name.includes(searchText);
    })
  }

  onClick() {
    this.dataService.newContact();
  }

}
