import pool from "../config/dbPool.js"; // Importamos la conexión a la base de datos PostgreSQL

// Función asíncrona para registrar una nueva data en la base de datos
export const registrarData = async (req, res) => {
  const { nombre, balance  } = req.body;
  try {
    const queryObjAdd = {
      text: 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *',
      values: [nombre, balance]
    };
    console.log(queryObjAdd);
    const result = await pool.query(queryObjAdd);
    console.log('registrado exitosamente.');
    res.status(201).json(result.rows[0]); // Devuelve el nuevo usuario creado

  } catch (error) {

    console.error('Error al registrar data:', error.stack);
    res.status(500).send('Error al registrar data');
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }
};


// Función asíncrona para obtener por consola el registro de una data por filtro
export const obtenerDataPorFiltro = async (req, res) => {
  const { id } = req.params;
  try {
    const queryObjGetFilter = {
      text: 'SELECT * FROM usuarios WHERE id = $1',
      values: [id]
    };
    const result = await pool.query(queryObjGetFilter);
    console.log(result.rows);
    console.log("Encontrado");
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener data por filtro:', error.stack);
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }
}

// Función asíncrona para obtener por consola toda la data registrada
export const obtenerData = async (req, res) => {
  try {
    const queryObjGets = {
      text: 'SELECT * FROM usuarios'
    };
    const result = await pool.query(queryObjGets);
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener data:', error.stack);
    res.status(500).send('Error al obtener data');
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }
}

// Función asíncrona para actualizar la data en la base de datos
export const actualizarData = async (req, res) => {
  const { nombre, balance } = req.body;
  const { id } = req.params;
  try {
    const queryObjUpdate = {
      text: 'UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3 RETURNING *',
      values: [nombre, balance, id]
    };

    const result = await pool.query(queryObjUpdate);
    if (result.rows.length > 0) {
      console.log(`data con ID ${id} ha sido actualizada.`);
      res.json(result.rows[0]); // Envía la canción actualizada como respuesta
    } else {
      console.log('No se encontró data con el ID proporcionado para actualizar.');
      res.status(404).send('data no encontrada'); // Envía una respuesta de error
    }
  } catch (error) {
    console.error('Error al actualizar la data:', error.stack);
    res.status(500).send('Error al actualizar la data'); // Envía una respuesta de error
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }
};

// Función asíncrona para eliminar la data de la base de datos
export const eliminarData = async (req, res) => {
  const { id } = req.params;
  try {
    const queryObjDelete = {
      text: 'DELETE FROM usuarios WHERE id = $1',
      values: [id]
    };
    const result = await pool.query(queryObjDelete);
    //Delete requiere validación
    // if (result.rows.length > 0) {
    //     console.log(`Registros de canciones con titulo ${titulo} ha sido eliminado.`);
    //     console.log(result.rows);
    // } else {
    //     console.log('No se encontró una cancion con el titulo proporcionado para eliminar.');
    //     console.log(result.rows);
    // }
    res.send('data eliminada exitosamente');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al eliminar data:', error.stack);
    res.status(500).send('Error al eliminar data');
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }
}
// Función asíncrona para realizar una transferencia entre usuarios
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
// Función asíncrona para obtener todas las transferencias almacenadas en la base de datos
export const obtenerTransferencias = async (req, res) => {
  try {
    const queryGetTransfers = {
      text: 'SELECT * FROM transferencias'
    };
    const result = await pool.query(queryGetTransfers);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener transferencias:', error.stack);
    res.status(500).send('Error al obtener transferencias');
    throw error;
  } finally {    
    console.log('El bloque try-catch ha terminado');
  }  
};