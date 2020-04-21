import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'jedi-altura',
    templateUrl: './altura.component.html',
    styleUrls: ['./altura.component.css']
})
export class AlturaComponent implements OnChanges {
    @Input() altura;
    @Input() alturaMaxima;
    larguraIcone: number;

    ngOnChanges(): void {
        this.larguraIcone = this.altura * 100 / this.alturaMaxima;
    }
}