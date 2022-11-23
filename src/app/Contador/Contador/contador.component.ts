import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
    <h1>Contador App</h1>
    <h3>La base es: {{base}}</h3>
    <button (click)="acumular(+base)">+{{base}}</button>
    <span>{{contador}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent
{
    contador: number =  10;
    base: number = 5;
    
    acumular(valor: number): void{

        this.contador += valor;
    }

}