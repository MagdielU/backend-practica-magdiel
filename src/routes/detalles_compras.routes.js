import { Router } from 'express';
import { obtenerDetallesCompras, obtenerDetallesCompra, eliminarDetalleCompra, actualizarDetallescompraPatch } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_compras', obtenerDetallesCompras);

// Ruta para obtener un cliente por su id
router.get('/detalles_compras/:id_detalle_compra', obtenerDetallesCompra);

// Eliminar un detalle de compra por su ID
router.delete("/eliminardetallecompra/:id_detalle_compra", eliminarDetalleCompra);

//Ruta para actualizar una un detalle compra por su iD
router.patch('/actualizardetallescomprapatch/:id_detalle_compra', actualizarDetallescompraPatch)
export default router;