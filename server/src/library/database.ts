import { Sequelize } from "sequelize";

require('dotenv').config()

export default class Database{

    private constructor() { }

    public static db: any = {}
    
    public static async connect() {
    }
}