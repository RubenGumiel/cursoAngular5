import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'keeper',
	templateUrl: './keeper.component.html'
})
export class KeeperComponent implements OnInit {
	title = "keeper page";

	ngOnInit() {
		console.log('keeper.component cargado!!');

		$('#pId').hide();
		$('#buttonId').click(function() {
			$('#pId').slideToggle();
		});
	}
}