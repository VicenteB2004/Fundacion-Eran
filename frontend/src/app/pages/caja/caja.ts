import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './caja.html',
  styleUrls: ['./caja.css']
})
export class Caja {
  // Variables para control de modales
  mostrarModalEditarMonto = false;
  mostrarModalRegistrar = false;

  // Variables para el monto inicial
  montoInicial = 0;
  fechaTransaccion = '';

  // Variables para nueva transacción
  nuevaTransaccion = {
    usuario: '',
    tipo: '',
    monto: 0,
    fecha: ''
  };

  // Lista de transacciones
  transacciones = [
    { usuario: 'Carlos', tipo: 'Ingreso', monto: 100.00, fecha: '2024-06-26' },
    { usuario: 'Andrea', tipo: 'Egreso', monto: 50.00, fecha: '2024-06-26' },
    { usuario: 'Pedro', tipo: 'Ingreso', monto: 200.00, fecha: '2024-06-26' },
  ];

  // Métodos para cálculos
  calcularIngresos(): number {
    return this.transacciones
      .filter(t => t.tipo === 'Ingreso')
      .reduce((sum, t) => sum + t.monto, 0);
  }

  calcularEgresos(): number {
    return this.transacciones
      .filter(t => t.tipo === 'Egreso')
      .reduce((sum, t) => sum + t.monto, 0);
  }

  calcularSaldo(): number {
    return this.montoInicial + this.calcularIngresos() - this.calcularEgresos();
  }

  contarIngresos(): number {
    return this.transacciones.filter(t => t.tipo === 'Ingreso').length;
  }

  contarEgresos(): number {
    return this.transacciones.filter(t => t.tipo === 'Egreso').length;
  }

  // Métodos para transacciones
  actualizarMontoInicial() {
    console.log('Monto inicial actualizado:', this.montoInicial);
    this.mostrarModalEditarMonto = false;
    // Aquí podrías agregar lógica para guardar en una API
  }

  registrarTransaccion() {
    this.transacciones.push({
      usuario: this.nuevaTransaccion.usuario,
      tipo: this.nuevaTransaccion.tipo,
      monto: Number(this.nuevaTransaccion.monto),
      fecha: this.nuevaTransaccion.fecha
    });

    // Resetear el formulario
    this.nuevaTransaccion = {
      usuario: '',
      tipo: '',
      monto: 0,
      fecha: ''
    };

    this.mostrarModalRegistrar = false;
  }

  eliminarTransaccion(index: number) {
    this.transacciones.splice(index, 1);
  }

  descargarReportePDF() {
    const doc = new jsPDF();

    doc.text('Reporte de Caja', 14, 15);
    doc.text(`Saldo actual: $${this.calcularSaldo().toFixed(2)}`, 14, 25);

    autoTable(doc, {
      startY: 30,
      head: [['N°', 'Usuario', 'Transacción', 'Monto', 'Fecha']],
      body: this.transacciones.map((item, i) => [
        i + 1,
        item.usuario,
        item.tipo,
        `$${item.monto.toFixed(2)}`,
        item.fecha
      ])
    });

    doc.save('reporte_caja.pdf');
  }
}