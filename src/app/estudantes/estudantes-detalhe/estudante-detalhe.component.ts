import { Component, OnInit } from '@angular/core';
import { IEstudante } from '../estudantes';

@Component({
  templateUrl: './estudante-detalhe.component.html',
  styleUrls: ['./estudante-detalhe.component.css']
})
export class EstudanteDetalheComponent implements OnInit {

  tituloPagina = 'Detalhe do Estudante';
  estudante: IEstudante;

  constructor() { }

  ngOnInit() {
  }
}