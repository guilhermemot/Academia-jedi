import { ListaEstudantesComponent } from './estudantes/lista-estudantes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EstudanteDetalheComponent } from './estudantes/estudante-detalhe/estudante-detalhe.component';
import { BemVindoComponent } from './home/bem-vindo/bem-vindo.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SexoPipe } from './compartilhado/sexo.pipe';
import { AlturaComponent } from './compartilhado/altura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudantesComponent,
    SexoPipe,
    AlturaComponent,
    EstudanteDetalheComponent,
    BemVindoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    RouterModule.forRoot([
      { path: 'estudantes', component: ListaEstudantesComponent },
      { path: 'estudantes/:id', component: EstudanteDetalheComponent },
      { path: 'bemvindo', component: BemVindoComponent },
      { path: '', redirectTo: 'bemvindo', pathMatch: 'full'},
      { path: '**', redirectTo: 'bemvindo', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
