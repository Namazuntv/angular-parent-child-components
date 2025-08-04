import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
      titulo = 'productos';
      descripcion = {
      nombre: 'mouse',
      precio: 100
    };
      usuario = {
        nombre: 'Jonathan',
        cargo: 'Jefe',
        rol: 'Full-Stack'
      };

  saludar(){
      return `Hola, ${this.usuario.cargo}`;
    }
}


