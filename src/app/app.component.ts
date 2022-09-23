import {Component} from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean = true;
  isCreating: boolean = false;

  accountList: IAccount[] = [
    {username: 'adam', password: 'admin'},
    {username: 'scott', password: 'admin'},
  ]
  contactList: IContact[] = [
    {
      id: 0,
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
      id: 0,
      name: 'contact 1',
      address: '123 main st',
      birthday: new Date(),
      meetingDate: new Date(),
      company: 'york solutions',
      email: 'contact@yorksolutions.net',
      notes: 'cool person!',
      phoneNumber: '555-555-5555',
      relation: 'co-worker'
    }
  ]

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
    this.isCreating = true;
  }

  cancelCreate() {
    this.isCreating = false;
  }

  createContact() {

  }

}
