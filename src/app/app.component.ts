import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';
  email: string;

  ngDoCheck() {
    this.email = localStorage.getItem('email');
  }

  deleteEmail() {
  	localStorage.removeItem('email');
  	localStorage.clear();
  	this.email = null;
  }
}
