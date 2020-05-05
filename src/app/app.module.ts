import { ListaEstudantesComponent } from './estudantes/lista-estudantes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SexoPipe } from './compartilhado/sexo.pipe';
import { AlturaComponent } from './compartilhado/altura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudantesComponent,
    SexoPipe,
    AlturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
