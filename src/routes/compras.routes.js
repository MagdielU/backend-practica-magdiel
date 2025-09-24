import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompras } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/compras', obtenerCompras);

// Ruta para obtener una compra por su id
router.get('/compras/:id_compra', obtenerCompra);

// Ruta para registrar una nueva compra
router.get('/registrarcompra', registrarCompra);

// Ruta para eliminar compra
router.delete('/eliminarcompra/:id_compra', eliminarCompras);
export default router;