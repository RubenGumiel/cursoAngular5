import { Component } from '@angular/core';

@Component({
  selector: 'save-email',
  template: `
  <h4>{{title}}</h4>
  <form class="form-inline"> 
    <input class="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"> 
    <button class="btn btn-outline-success my-2 my-sm-0" (click)="guardarEmail()">Guardar</button> 
  </form>
  `
})
export class SaveEmailComponent {
  title = 'Guardar email';
  email: string;

  guardarEmail() {
    if (this.email)
      localStorage.setItem('email', this.email);
  }
}