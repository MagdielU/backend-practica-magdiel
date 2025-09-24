import { pool } from '../../db_conection.js';

// Obtener todas los clientes
export const obtenerClientes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM clientes');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;
        const [result] = await pool.query('SELECT * FROM Clientes WHERE id_cliente= ? ', [id_cliente]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_cliente} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los cliente.'
        });
    }
};

// Registrar una nueva Categoría
export const registrarCliente= async (req, res) => {
    try {
        const {
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        celular,
        direccion,
        cedula 
            
        } = req.body;

        const [result] = await pool.query(
            'INSERT INTO clientes(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
                primer_nombre,
                segundo_nombre,
                primer_apellido,
                segundo_apellido,
                celular,
                direccion,
                cedula
            ]
        );

        res.status(201).json({ id_cliente: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el cliente.',
            error: error
        });
    }
};

// clientes.controllers.js
export const eliminarcliente = async (req, res) => {
  try {
    const id_venta = req.params.id_cliente;
    const [result] = await pool.query(
      "DELETE FROM clientes WHERE id_cliente = ?",
       [id_cliente]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `No se encontró el cliente con ID ${req.params.id}`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar cliente",
      error: error,
    });
  }
};
