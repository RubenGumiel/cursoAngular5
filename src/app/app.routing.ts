import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaComponent } from './fruta/fruta.component';
import { AnimalComponent } from './animal/animal.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KeeperComponent } from './keeper/keeper.component';

const appRoutes : Routes = [
	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'animal', component: AnimalComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'keeper', component: KeeperComponent},
	{path: 'home', component: HomeComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);