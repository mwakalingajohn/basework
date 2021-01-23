import { Sequelize } from "sequelize-typescript"
import { User } from "../models/User"

const databaseName: string = process.env.DATABASE_NAME || "basework"
const databaseUsername: string = process.env.DATABASE_USERNAME || "root"
const databasePassword: string = process.env.DATABASE_PASSWORD || "."
const databaseHost: string = process.env.DATABASE_HOST || "localhost"
const databasePort: number = parseInt(process.env.DATABASE_PORT || "3306")

const sequelize = new Sequelize({
    database: databaseName,
    host: databaseHost,
    port: databasePort,
    password: databasePassword,
    username: databaseUsername,
    dialect: "mysql",
    logging: false,
    models: [User]
})

export {
    sequelize
}