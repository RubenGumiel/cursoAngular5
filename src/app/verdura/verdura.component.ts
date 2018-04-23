import { Component, OnChanges, SimpleChanges, Input } from '@angular/core'

@Component({
	selector: 'verdura',
	templateUrl: './verdura.component.html'
})
export class VerduraComponent implements OnChanges {
	public name: string;
	@Input() name2: string;
	constructor() {
		this.name = "ho";
		this.name2 = "cuca";
	}

	ngOnChanges(changes: SimpleChanges) {
		debugger
		console.log(changes);
	}
}