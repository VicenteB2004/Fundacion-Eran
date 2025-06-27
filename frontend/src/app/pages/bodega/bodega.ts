import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bodega',
  imports: [FormsModule,NgFor],
  templateUrl: './bodega.html',
  styleUrl: './bodega.css'
})
export class Bodega {
mostrarModal = false;

  // Array de beneficiarios (añadido esto)
  beneficiarios = [
    {
      nombre: 'Bodega Portoviejo',
      categoria: 'Uno',
      estado: '001-1234567-8',
      cantidad: '809-555-1234'
    },
    {
      nombre: 'Bodega Manta',
      categoria: 'Dos',
      estado: '002-9876543-2',
      cantidad: '829-555-5678'
    }
    // Puedes agregar más beneficiarios aquí o cargarlos desde un servicio
  ];

  entrega = {
    nombre: '',
    Ubicacion: '',
    estadoproducto: '',
    categoria: '',
    Capacidad: '',
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

