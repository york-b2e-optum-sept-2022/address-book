import { Injectable } from '@angular/core';
import {IContact} from "./interfaces/IContact";
import {v4 as uuidv4} from "uuid";
import {Subject} from "rxjs";
import {AccountService} from "./account.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedContact: IContact | null = null;
  $selectedContact = new Subject<IContact | null>();

  contactList: IContact[] = [
    {
      id: '123',
      name: 'contact 1',
      address: '123 main st',
      birthday: new Date(),
      meetingDate: new Date(),
      company: 'york solutions',
      email: 'contact@yorksolutions.net',
      notes: 'cool person!',
      phoneNumber: '555-555-5555',
      relation: 'co-worker'
    },
    {
      id: '321',
      name: 'contact 2',
      address: '123 main st',
      birthday: new Date(),
      meetingDate: new Date(),
      company: 'york solutions',
      email: 'contact@yorksolutions.net',
      notes: 'cool person!',
      phoneNumber: '555-555-5555',
      relation: 'co-worker'
    },
  ];

  constructor(private accountService: AccountService) {
    console.log(accountService.foo)
  }

  setSelectedContact(id: string) {
    const contact = this.contactList.find(contact => contact.id === id);
    if (contact === undefined) {
      console.error('unable to find contact');
      return;
    }

    this.selectedContact = {...contact};
    this.$selectedContact.next(this.selectedContact);
  }

  cancelSelectedContact() {
    this.selectedContact = null;
    this.$selectedContact.next(this.selectedContact)
  }

  newContact() {
    this.selectedContact = {
      id: "",
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      birthday: new Date(),
      meetingDate: new Date(),
      relation: "",
      company: "",
      notes: "",
    }

    this.$selectedContact.next(this.selectedContact)
  }

  deleteContact(id: string) {
    this.contactList = this.contactList.filter(
      contact => contact.id !== id
    );
  }

  onContactInputSubmit(contact: IContact) {
    if (contact.id === "") {
      this.addContact(contact);
    } else {
      this.updateContact(contact);
    }

    this.selectedContact = null;
    this.$selectedContact.next(this.selectedContact);
  }

  addContact(contact: IContact) {
    contact.id = uuidv4();
    this.contactList.push(contact);
  }

  updateContact(updatedContact: IContact) {
    const index = this.contactList.findIndex(contact => contact.id === updatedContact.id);
    if (index === -1) {
      console.error('unable to find updatedContact in the list');
      return
    }

    this.contactList[index] = updatedContact;
  }

}
