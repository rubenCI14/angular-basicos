import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent
{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado():string{

        return this.nombre.toUpperCase();
    }

    obtenerEdad(): string{

        //Ambas son iguales(la última típica de js)
        //return this.nombre +  ' - ' + this.edad.toString();

        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{

        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{

        this.edad = 21;
    }
}