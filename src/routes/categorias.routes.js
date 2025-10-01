import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria, actualizarCategoria } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoria por su id
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva categoria
router.get('/registrarcategoria', registrarCategoria);

// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

//Ruta para atualizar una categoria por su iD
router.put('/actualizarcategoria/:id_categoria', actualizarCategoria)
export default router;