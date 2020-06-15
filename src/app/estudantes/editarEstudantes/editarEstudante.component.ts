import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEstudante } from '../estudantes';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudanteService } from '../estudantes.service';

@Component({
  selector: 'jedi-estudante-editar',
  templateUrl: './estudante-editar.component.html',
  styleUrls: ['./estudante-editar.component.css']
})
export class EstudanteEditarComponent implements OnInit {
  titulo = 'Edição do Estudante';
  errorMessage: string;
  formEstudante: FormGroup;
  estudante: IEstudante;
  private sub: Subscription;
  constructor(private fb: FormBuilder,
              private rota: ActivatedRoute,
              private roteador: Router,
              private servicoEstudantes: EstudanteService) {}
  ngOnInit(): void {
    this.formEstudante = this.fb.group({
      nome: ['', Validators.required],
      peso: ['', Validators.required],
      corCabelo: ['', Validators.required],
      corOlhos: ['', Validators.required],
      anoNascimento: '',
      sexo: ['', Validators.required],
      planeta: ['', Validators.required]
    });
    this.sub = this.rota.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this.getEstudante(id);
      }
    );
  }
  getEstudante(id: string): void {
    this.servicoEstudantes.getEstudante(id)
      .subscribe({
        next: (estudante: IEstudante) => this.exibeEstudante(estudante),
        error: err => this.errorMessage = err
      });
  }
  exibeEstudante(estudante: IEstudante): void {
    if (this.formEstudante) {
      this.formEstudante.reset();
    }
    this.estudante = estudante;
    if (this.estudante.id === 0) {
      this.titulo = 'Cadastrar Estudante';
    } else {
      this.titulo = `Editar Estudante: ${this.estudante.nome}`;
    }
    this.estudante.patchValue({
      id: this.estudante.id,
      nome: this.estudante.nome,
      peso: this.estudante.peso,
      corCabelo: this.estudante.corCabelo,
      corOlhos: this.estudante.corOlhos,
      anoNascimento: this.estudante.anoNascimento,
      sexo: this.estudante.sexo,
      planeta: this.estudante.planeta,
      url: this.estudante.url
    });
  }
  salvarEstudante(): void {
    if (this.formEstudante.valid) {
      if (this.formEstudante.dirty) {
        const p = { ...this.estudante, ...this.formEstudante.value };
        if (p.id === 0) {
          this.servicoEstudantes.criarEstudante(p)
            .subscribe({
              next: () => {
                alert('O estudante foi criado!!')
                this.onSaveComplete()
              },
              error: err => this.errorMessage = err
            });
        } else {
          this.servicoEstudantes.atualizarEstudante(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Corrija os erros de validação.';
    }
  }
  deletarEstudante(): void {
    if (this.estudante.id === 0) {
      this.onSaveComplete();
    } else {
      if (confirm(`Remover este estudante: ${this.estudante.nome}?`)) {
        this.servicoEstudantes.deletarEstudante(this.estudante.id)
          .subscribe({
            next: () => {
              alert('O estudante foi removido!!');
              this.onSaveComplete()
            }, error: err => this.errorMessage = err
          });
      }
    }
  }
  onSaveComplete(): void {
    this.formEstudante.reset();
    this.roteador.navigate(['/estudantes']);
  }

}