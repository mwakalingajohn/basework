import express from 'express'; 
import { prefix, appRoutes } from "../main/routes"
import { sequelize } from '../models'; 


const app = express();
const PORT = 1700;
const path = require("path")
const cors = require("cors") 
const bodyParser = require("body-parser")
const multer = require("multer")

export default class Server {

    start() {
        this.loadConfigs()
        this.loadRoutes() 
        this.startServer()
        this.connectDatabase()
    }

    startServer() {
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
        });
    }

    loadConfigs() {
        app.use(cors()) 
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
        app.use(multer().array())
        app.use(express.static(path.join(process.cwd(), 'dist/public/')));
    }

    loadRoutes() {
        appRoutes.forEach(appRoute => {
            let path = `${prefix}/${appRoute.path}`

            app.use(path, appRoute.router)
        });

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(process.cwd(), 'dist/public/', 'index.html'));
        });
    } 

    connectDatabase() {
        sequelize.sync({alter:true})
    }
}