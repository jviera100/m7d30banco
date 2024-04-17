import { sequelize } from '../config/db.js';
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
