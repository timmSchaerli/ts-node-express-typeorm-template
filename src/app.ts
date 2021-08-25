import express = require('express');
import bodyParser = require("body-parser");
import http = require("http");
import routes from './routes';
import config from "./config";

const cors = require('cors');

export class Application {
    app: express.Application;

    //ToDo add logger

    private readonly httpServer;
    private readonly httpsServer;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());

        this.app.use((req, res, next) => {
            let newDate = new Date(Date.now());
            console.log(`${newDate.toDateString()} ${newDate.toTimeString()}` + " on " + req.url);
            next();
        });
        this.app.use('/api', routes);


        this.httpServer = http.createServer(this.app);

        // https configuration
        //if (config.isRemote) {
        //const privateKey = fs.readFileSync('/etc/nginx/ssl/private.pem', 'ascii');
        //const ca = fs.readFileSync('/etc/nginx/ssl/servpass-284998-x509chain.pem', 'ascii');
        //const credentials = {key: privateKey, cert: ca};
        //this.httpsServer = https.createServer(credentials, this.app);
        //}
    }

    setupDbAndServer = async () => {
        //ToDo add data via config file
        /*const conn = await createConnection({
            type: 'mysql',
            host: config.db.host,
            port: config.db.port,
            username: config.db.username,
            password: config.db.password,
            database: config.db.database,
            entities: [
                __dirname + '/entity/*.ts',
            ],
            synchronize: true,
            logging: false,
        });
        console.log(`Connected to database. Connection: ${conn.name} / ${conn.options.database}`);*/
        await this.startServer();

    };

    startServer() {
        this.httpServer.listen(config.port, () => {
            console.log(`HTTP Server started at port: ${config.port}`);
        });
    }
}
