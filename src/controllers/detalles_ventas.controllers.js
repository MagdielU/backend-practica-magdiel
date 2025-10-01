import { pool } from '../../db_conection.js';

// Obtener todas las DetallesVenta
export const obtenerDetallesVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener datalles compra por su ID
export const obtenerDetallesVenta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query('SELECT * FROM Detalles_ventas WHERE id_detalle_venta= ? ', [id_detalle_venta]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los detalles_venta.'
        });
    }
};

// Eliminar un detalle de venta por su ID
export const eliminarDetalleVenta = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query(
      "DELETE FROM detalles_ventas WHERE id_detalle_venta = ?",
      [id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `No se encontró el detalle de venta con ID ${id_detalle_venta}`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar el detalle de venta.",
      error: error,
    });
  }
};

// Actualizar parcialmente un detalles venta por su ID
export const actualizarDetallesventaPatch = async (req, res) => {
    try {
        const { id_detalle_venta } = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE Detalles_ventas SET ? WHERE id_detalle_venta = ?',
            [datos, id_detalle_venta]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Detalles_ventas con ID ${id_detalle_venta} no encontrado.`
            });
        }

        res.status(200).json({
            mensaje: `Detalles_ventas con ID ${id_detalle_venta} actualizado correctamente.`
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al actualizar el detalle_venta.',
            error
        });
    }
};