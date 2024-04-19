import pg from 'pg';
import chalk from "chalk";
// import { Sequelize } from 'sequelize';

const { Pool } = pg;

// process.loadEnvFile();
import "dotenv/config"

// const { DB_DIALECT, DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
const { DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

const config = {
    host: DB_HOST,
    database: DB_DATABASE,
    port: DB_PORT,   
    user: DB_USER,
    password: DB_PASSWORD,
    allowExitOnIdle: true,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false,
    //     },
    // }
}

export const pool = new Pool(config);

// const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
//     dialect: DB_DIALECT,
//     host: DB_HOST,   
//     port: DB_PORT,    
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false,
//         },
//     }
// });

// export default { sequelize, pool };
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectarse a la base de datos:', err.stack);
    }
    console.log(chalk.underline.bgCyanBright.magenta.bold.italic('\nConexión con la base de datos establecida.'));
    release();
});
export default pool;