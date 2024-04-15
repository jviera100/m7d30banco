import pg from 'pg';
import { Sequelize } from 'sequelize';
const { Pool } = pg;
// import "dotenv/config";
process.loadEnvFile();


// Configuración de la conexión a la base de datos PostgreSQL
const { DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

const config = {
    host: DB_HOST,
    database: DB_DATABASE,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    allowExitOnIdle: true, // Si es true, la conexión se cerrará por inactividad

    //conexion al db de neon
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    }
}

const pool = new Pool(config);

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: DB_HOST,
});

export { sequelize, pool };

