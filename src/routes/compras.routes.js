import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompras, actualizarCompraPatch } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todos los compras
router.get('/compras', obtenerCompras);

// Ruta para obtener una compra por su id
router.get('/compras/:id_compra', obtenerCompra);

// Ruta para registrar una nueva compra
router.get('/registrarcompra', registrarCompra);

// Ruta para eliminar compra
router.delete('/eliminarcompra/:id_compra', eliminarCompras);

//Ruta para atualizar una compra por su iD
router.patch('/actualizarcomprapatch/:id_compra', actualizarCompraPatch)
export default router;