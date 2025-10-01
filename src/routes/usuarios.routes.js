import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, eliminarUsuario, actualizarUsuariopatch} from '../controllers/usuarios.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener un cliente por su id
router.get('/usuarios/:id_usuarios', obtenerUsuario);

// Eliminar un usuario por su ID
router.delete("/eliminarusuario/:id_usuario", eliminarUsuario);

//Ruta para actualizar un usuario por su iD
router.patch('/actualizarusuariopatch/:id_compra', actualizarUsuariopatch)
export default router;