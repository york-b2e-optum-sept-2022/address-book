import {Component} from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean = true;
  selectedContact: IContact | null = null;

  accountList: IAccount[] = [
    {username: 'adam', password: 'admin'},
    {username: 'scott', password: 'admin'},
  ]
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
  ]

  onContactInputSubmit(contact: IContact) {
    if (contact.id === "") {
      this.addContact(contact);
    } else {
      this.updateContact(contact);
    }

    this.selectedContact = null;
  }

  // modify contactList
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

  deleteContact(id: string) {
    this.contactList = this.contactList.filter(
      contact => contact.id !== id
    );
  }


  // reaction to event
  onLogin(loginCreds: IAccount) {
    const foundAccount = this.accountList.find((account) => {
      return account.username === loginCreds.username
        && account.password === loginCreds.password
    });

    if (foundAccount === undefined) {
      console.log('invalid login')
      return;
    }

    this.isLoggedIn = true;
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
  }

  cancelCreate() {
    this.selectedContact = null;
  }


  updateContactSelect(id: string) {
    const contact = this.contactList.find(contact => contact.id === id);
    if (contact === undefined) {
      console.error('unable to find contact');
      return;
    }

    this.selectedContact = {...contact};
  }

}
