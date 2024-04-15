// En el archivo usuarios.js
import { sequelize } from '../config/dbPool.js';
import { DataTypes } from 'sequelize';

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50)
    },
    balance: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0 // Validación para que el balance sea mayor o igual a cero
        }
    }
}, {
    timestamps: false // No necesitas timestamps en esta tabla
});

export { Usuario };

// En el archivo transferencias.js
import { sequelize } from '../config/dbPool.js';
import { DataTypes } from 'sequelize';
import { Usuario } from './usuarios.js'; // Importa el modelo de usuarios para la relación

const Transferencia = sequelize.define('transferencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emisorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario, // Aquí debes especificar el modelo de Usuario
            key: 'id'
        }
    },
    receptorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario, // Aquí también
            key: 'id'
        }
    },
    monto: {
        type: DataTypes.FLOAT
    },
    fecha: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false // No necesitas timestamps en esta tabla
});

export { Transferencia };
