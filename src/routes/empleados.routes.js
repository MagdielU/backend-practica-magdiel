import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, eliminarEmpleado, actualizarEmpleadopatch} from '../controllers/empleados.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un cliente por su id
router.get('/empleados/:id_empleados', obtenerEmpleado);

// Eliminar un empleado por su ID
router.delete("/eliminarempleado/:id_empleado", eliminarEmpleado);

//Ruta para actualizar un empleado por su iD
router.patch('/actualizarempleadopatch/:id_compra', actualizarEmpleadopatch)
export default router;