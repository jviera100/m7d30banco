import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';
import { Usuario } from './usuario.js'; // Importa el modelo de Usuario para la relación

const Transferencia = sequelize.define('transferencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emisorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    receptorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
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
