import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
  <div class="card">
    <div class="card-header">
      {{title}}
    </div>
    <div class="card-body">
      <display-email></display-email>
      <save-email></save-email>
    </div>
  </div>
  `
})
export class MainEmailComponent implements OnInit {
  title = 'Modulo simple de email';

  ngOnInit() {
  	console.log('Componente principal del modulo email... cargado!');
  }
}