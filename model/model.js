import { sequelize } from '../config/dbPool.js'; // Cambio en la ruta de importación
import { DataTypes } from 'sequelize';

const Project = sequelize.define('project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

export default Project;
