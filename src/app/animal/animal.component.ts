import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'animal',
	templateUrl: './animal.component.html'
})
export class AnimalComponent implements OnInit {
	title = "animal page";

	ngOnInit() {
		console.log('animal.component cargado!!');
	}
}