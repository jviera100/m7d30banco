import pool from "../config/dbPool.js";

export const realizarTransferencia = async (req, res) => {
  const { emisor, receptor, monto } = req.body;
  try {
    await pool.query('BEGIN');
    
    // Actualizar saldo del emisor
    const queryDescuento = {
      text: 'UPDATE usuarios SET balance = balance - $1 WHERE id = $2 RETURNING *',
      values: [monto, emisor]
    };
    const descuento = await pool.query(queryDescuento);
    
    // Actualizar saldo del receptor
    const queryAumento = {
      text: 'UPDATE usuarios SET balance = balance + $1 WHERE id = $2 RETURNING *',
      values: [monto, receptor]
    };
    const aumento = await pool.query(queryAumento);
    
    await pool.query('COMMIT');
    
    console.log("Transferencia realizada con éxito");
    res.status(200).send("Transferencia realizada con éxito");
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error('Error al realizar transferencia:', error.stack);
    res.status(500).send('Error al realizar transferencia');
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }  
};
