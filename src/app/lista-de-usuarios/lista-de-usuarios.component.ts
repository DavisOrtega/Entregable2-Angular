import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

interface estudiante {
  nombre: string;
  apellido: string;
  telefono: number;
  email: string;
  fechaInscripcion: Date;
}

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss']
})
export class ListaDeUsuariosComponent {
  estudiantes = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '3213490507',
      email: 'juanperez@gmail.com',
      fechaInscripcion: new Date(),
    },

    {
      nombre: 'Sebastian',
      apellido: 'Rios',
      telefono: '3214568507',
      email: 'sebastianrios@gmail.com',
      fechaInscripcion: new Date(),
    },

    {
      nombre: 'Maria',
      apellido: 'Hernandez',
      telefono: '3213478507',
      email: 'mariahernandez@gmail.com',
      fechaInscripcion: new Date(),
    },
  ]
}
