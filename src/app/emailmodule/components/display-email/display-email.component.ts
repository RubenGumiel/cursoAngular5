import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'display-email',
  template: `
  <div *ngIf="email">
  <h4>{{title}}</h4>
  <strong>Email: </strong>{{email}}
  <button (click)="deleteEmail()" class="btn btn-danger">Eliminar email</button>
  </div>
  `
})
export class DisplayEmailComponent implements DoCheck {
  title = 'Mostrar email';
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