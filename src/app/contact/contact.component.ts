import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
	title = "contact page";

	ngOnInit() {
		console.log('contact.component cargado!!');
	}
}