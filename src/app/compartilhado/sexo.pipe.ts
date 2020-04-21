import { PipeTransform, Pipe } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
    name: 'sexoPipe'
})
export class SexoPipe implements PipeTransform {
    transform(valor: string): string {
        let abreviado = valor;
        if (valor === 'masculino') {
            abreviado = 'M';
        } else if (valor === 'feminino') {
            abreviado = 'F';
        }
        return abreviado;
    }
}