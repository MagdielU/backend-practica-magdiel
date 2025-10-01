import { Router } from 'express';
import { obtenerVentas, obtenerVenta, eliminarVenta, actualizarVentapatch } from '../controllers/ventas.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/ventas', obtenerVentas);

// Ruta para obtener un cliente por su id
router.get('/ventas/:id_ventas', obtenerVenta);

// Eliminar una venta por su ID
router.delete("/eliminarventa/:id_venta", eliminarVenta);

//Ruta para actualizar un ventas por su iD
router.patch('/actualizarventapatch/:id_cliente', actualizarVentapatch)
export default router;