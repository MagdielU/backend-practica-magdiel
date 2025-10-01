import { Router } from 'express';
import { obtenerDetallesVentas, obtenerDetallesVenta, eliminarDetalleVenta, actualizarDetallesventaPatch} from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_ventas', obtenerDetallesVentas);

// Ruta para obtener un cliente por su id
router.get('/detalles_ventas/:id_detalle_venta', obtenerDetallesVenta);

// Eliminar un detalle de venta por su ID
router.delete("/eliminardetalleventa/:id_detalle_venta", eliminarDetalleVenta);

//Ruta para actualizar un detalle venta por su iD
router.patch('/actualizardetallesventapatch/:id_detalle_compra', actualizarDetallesventaPatch)
export default router;