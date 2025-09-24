import { Router } from 'express';
import { obtenerVentas, obtenerVenta, eliminarVenta } from '../controllers/ventas.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/ventas', obtenerVentas);

// Ruta para obtener un cliente por su id
router.get('/ventas/:id_ventas', obtenerVenta);

// Eliminar una venta por su ID
router.delete("/eliminarventa/:id_venta", eliminarVenta);

export default router;