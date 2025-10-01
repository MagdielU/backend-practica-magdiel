import { pool } from '../../db_conection.js';

// Obtener todas las compras
export const obtenerDetallesCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_Compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener datalles compra por su ID
export const obtenerDetallesCompra = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query('SELECT * FROM Detalles_compras WHERE id_detalle_compra= ? ', [id_detalle_compra]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los detalles_compra.'
        });
    }
};

// Eliminar un detalle de compra por su ID
export const eliminarDetalleCompra = async (req, res) => {
  try {
    const id_detalle_compra = req.params.id_detalle_compra;
    const [result] = await pool.query(
      "DELETE FROM detalles_compras WHERE id_detalle_compra = ?",
      [id_detalle_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `No se encontró el detalle de compra con ID ${id_detalle_compra}`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar el detalle de compra.",
      error: error,
    });
  }
};

// Actualizar parcialmente un detalles compras por su ID
export const actualizarDetallescompraPatch = async (req, res) => {
    try {
        const { id_detalle_compra } = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE Detalles_compras SET ? WHERE id_detalle_compra = ?',
            [datos, id_detalle_compra]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Detalles_compras con ID ${id_detalle_compra} no encontrado.`
            });
        }

        res.status(200).json({
            mensaje: `Detalles_compras con ID ${id_detalle_compra} actualizado correctamente.`
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al actualizar el detalle_compra.',
            error
        });
    }
};