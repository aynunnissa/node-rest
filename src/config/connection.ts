import { Sequelize } from "sequelize";
require('dotenv').config();


const dbName = process.env.DB_DATABASE as string;
const dbDialect = "mysql";
const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequalizeConnection = new Sequelize(dbName, dbUsername, dbPassword, {
    dialect: dbDialect,
    host: dbHost
});

export default sequalizeConnection;