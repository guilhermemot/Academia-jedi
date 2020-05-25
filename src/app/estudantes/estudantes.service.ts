import { Injectable } from '@angular/core';
import { IEstudante } from './estudantes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EstudanteService {

  private estudanteUrl = 'localhost:8080/estudantesapi/estudantes';

  constructor(private http: HttpClient) {}

  getEstudantes(): Observable<IEstudante[]> {
    return this.http.get<IEstudante[]>(this.estudanteUrl + '/todos').pipe(
      tap(dados => console.log(JSON.stringify(dados))),
      catchError(this.trataErro)
      );
  }
  getEstudante(id: string): Observable<IEstudante> {
    const url = `${this.estudanteUrl}/${id}`;
    return this.http.get<IEstudante>(url)
      .pipe(
        tap(dado => console.log('Estudante: ' + JSON.stringify(dado))),
        catchError(this.trataErro)
      );
  }
  private trataErro(erro: HttpErrorResponse) {
    let mensagemErro = '';
    if (erro.error instanceof ErrorEvent) {
      mensagemErro = `Erro ocorrido: ${erro.error.message}`;
    } else {
      mensagemErro = `Sistema retorna código: ${erro.status}, mensagem de erro é ${erro.message}`;
    }
    console.error(mensagemErro);
    return throwError(mensagemErro);

    }
}