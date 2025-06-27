import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory-sale-product',
  imports: [CommonModule, FormsModule, NgFor, DecimalPipe],
  templateUrl: './inventory-sale-product.html',
  styleUrl: './inventory-sale-product.css'
})
export class InventorySaleProduct {
  mostrarModal = false;
  clienteEncontrado = false;
  cedulaBusqueda = '';

  // Datos de productos para la tabla
  productos = [
    { 
      id: 1,
      nombre: 'Laptop HP', 
      categoria: 'Electrónica', 
      estado: 'Disponible', 
      precio: 45000,
      codigo: 'LP-HP-001' 
    },
    { 
      id: 2,
      nombre: 'Mouse Inalámbrico', 
      categoria: 'Accesorios', 
      estado: 'Disponible', 
      precio: 1200,
      codigo: 'MS-WL-002' 
    }
  ];

  // Datos de clientes para el modal de venta
  clientes = [
    { nombre: 'Juan Pérez', cedula: '001-1234567-8', telefono: '809-555-1234' },
    { nombre: 'María Rodríguez', cedula: '002-9876543-2', telefono: '829-555-5678' }
  ];

  venta = {
    nombreCliente: '',
    cedulaCliente: '',
    productoVendido: '',
    cantidad: 1,
    precioUnitario: 0,
    total: 0
  };

  // ... resto de tus métodos permanecen igual
  abrirModal() {
    this.mostrarModal = true;
    this.clienteEncontrado = false;
    this.cedulaBusqueda = '';
    this.resetearFormularioVenta();
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  resetearFormularioVenta() {
    this.venta = {
      nombreCliente: '',
      cedulaCliente: '',
      productoVendido: '',
      cantidad: 1,
      precioUnitario: 0,
      total: 0
    };
  }

  buscarCliente() {
    const cliente = this.clientes.find(c => c.cedula === this.cedulaBusqueda);
    
    if (cliente) {
      this.venta.nombreCliente = cliente.nombre;
      this.venta.cedulaCliente = cliente.cedula;
      this.clienteEncontrado = true;
    } else {
      alert('Cliente no encontrado. Verifique la cédula.');
    }
  }

  actualizarPrecio() {
    const producto = this.productos.find(p => p.codigo === this.venta.productoVendido);
    this.venta.precioUnitario = producto ? producto.precio : 0;
    this.calcularTotal();
  }

  calcularTotal() {
    this.venta.total = this.venta.cantidad * this.venta.precioUnitario;
  }

  registrarVenta() {
    console.log('Venta registrada:', this.venta);
    alert('Venta registrada exitosamente');
    this.cerrarModal();
  }
}