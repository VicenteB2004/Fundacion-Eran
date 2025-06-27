import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-ventas',
  imports: [FormsModule, NgFor],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {
  mostrarModal = false;

  beneficiarios = [
    {
      cliente: 'Bodega Portoviejo',
      cedula: '001-1234567-8',
      producto: 'mouse',
      unidades: '02',
      cantidad: '809-555-1234',
      preciounidad: '$10',
      total: '10'
    },
    {
      cliente: 'Bodega Manta',
      cedula: '001-1234567-8',
      producto: 'lapto',
      unidades: '01',
      cantidad: '829-555-5678',
      preciounidad: '$10',
      total: '10'
    }
  ];

  entrega = {
    nombre: '',
    Ubicacion: '',
    estadoproducto: '',
    categoria: '',
    Capacidad: '',
  };

  // ✅ Nueva función para descargar el PDF
  descargarReportePDF() {
    const doc = new jsPDF();

    doc.text('Reporte de Ventas', 14, 15);

    autoTable(doc, {
      startY: 20,
      head: [['N°', 'Cliente', 'Cédula', 'Producto', 'Unidades', 'Precio Unidad', 'Total']],
      body: this.beneficiarios.map((b, i) => [
        i + 1,
        b.cliente,
        b.cedula,
        b.producto,
        b.unidades,
        b.preciounidad,
        b.total
      ])
    });

    doc.save('reporte_ventas.pdf');
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  registrarEntrega() {
    console.log('📦 Datos de entrega:', this.entrega);
    this.cerrarModal();
  }
}
