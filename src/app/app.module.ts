import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { VerduraComponent } from './verdura/verdura.component';
import { AnimalComponent } from './animal/animal.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KeeperComponent } from './keeper/keeper.component';

// importar nuestro propio modulo
import { EmailModule } from './emailmodule/emailmodule.component';
  
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    VerduraComponent,
    AnimalComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    EmailModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
