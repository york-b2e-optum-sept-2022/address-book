import {Component} from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";
import {DataService} from "./data.service";

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

  constructor(private dataService: DataService) {
    this.dataService.$selectedContact.subscribe(
      (selectedContact) => {
        this.selectedContact = selectedContact;
      }
    )
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
}
