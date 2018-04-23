import { Component } from '@angular/core'

@Component({
	selector: 'fruta',
	template: `
		<h2>{{title}}</h2>
		<p>{{list}}</p>
		<verdura name2="algo"></verdura>
	`
})
export class FrutaComponent {
	public title = 'Componente de frutas';
	public list = 'Melon, sandia, banana, pera';
}