/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EstudanteEditarComponent } from './editarEstudante.component';
describe('EstudanteEditarComponent', () => {
  let component: EstudanteEditarComponent;
  let fixture: ComponentFixture<EstudanteEditarComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudanteEditarComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});