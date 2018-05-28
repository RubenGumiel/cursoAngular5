// importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// importar componentes
import { SaveEmailComponent } from './components/save-email/save-email.component';
import { DisplayEmailComponent } from './components/display-email/display-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

// decorar ngModule para cargar los componentes y la configuracuion del modulo
@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [
		SaveEmailComponent,
		DisplayEmailComponent,
		MainEmailComponent
	],
	exports: [MainEmailComponent]
})
export class EmailModule {}