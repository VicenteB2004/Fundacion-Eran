import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate',
  imports: [FormsModule,NgFor],
  templateUrl: './donate.html',
  styleUrl: './donate.css'
})
export class Donate {
mostrarModal = false;

  // Array de beneficiarios (añadido esto)
  beneficiarios = [
    {
      nombre: 'Ejemplo',
      apellido: 'Uno',
      cedula: '001-1234567-8',
      telefono: '809-555-1234'
    },
    {
      nombre: 'Ejemplo',
      apellido: 'Dos',
      cedula: '002-9876543-2',
      telefono: '829-555-5678'
    }
    // Puedes agregar más beneficiarios aquí o cargarlos desde un servicio
  ];

  entrega = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    direccion: '',
    tipoDonacion: '',
    cantidad: 0,
    fechaEntrega: ''
  };

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  registrarEntrega() {
    console.log('📦 Datos de entrega:', this.entrega);
    // Aquí puedes llamar a tu servicio HTTP para guardar en backend
    this.cerrarModal();
  }
}

