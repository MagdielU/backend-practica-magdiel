import { Router } from 'express';
import {obtenerClientes, obtenerCliente, registrarCliente, eliminarcliente , actualizarClientePatch} from '../controllers/clientes.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por su id
router.get('/clientes/:id_cliente', obtenerCliente);

// Ruta para registrar una nueva cliente
router.get('/registrarcliente', registrarCliente);

// Ruta para eliminar un cliente por su ID
router.delete("/eliminarcliente/:id_cliente", eliminarcliente);

//Ruta para atualizar un cliente por su iD
router.patch('/actualizarclientepatch/:id_cliente', actualizarClientePatch)
export default router;