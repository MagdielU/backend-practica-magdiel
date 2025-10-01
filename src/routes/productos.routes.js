import { Router } from 'express';
import { obtenerProductos, obtenerProducto, eliminarProducto, actualizarProductopatch} from '../controllers/productos.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/productos', obtenerProductos);

// Ruta para obtener un cliente por su id
router.get('/productos/:id_productos', obtenerProducto);

// Eliminar un producto por su ID
router.delete("/eliminarproducto/:id_producto", eliminarProducto);

//Ruta para actualizar un produto por su iD
router.patch('/actualizarproductopatch/:id_compra', actualizarProductopatch)
export default router;