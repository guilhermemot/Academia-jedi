/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BemVindoComponent } from './bemVindo.component';
describe('BemVindoComponent', () => {
  let component: BemVindoComponent;
  let fixture: ComponentFixture<BemVindoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BemVindoComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BemVindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});