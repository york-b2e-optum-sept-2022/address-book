import {Component, EventEmitter, Output} from '@angular/core';
import {IAccount} from "../interfaces/IAccount";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() onLogin = new EventEmitter<IAccount>();

  username!: string;
  password!: string;

  onClick() {
    this.onLogin.emit({
      username: this.username,
      password: this.password
    });
  }
}
