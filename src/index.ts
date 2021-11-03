import express = require('express');
import bodyParser = require("body-parser");
import http = require("http");
import routes from './routes';
import config from "./config";

let app: express.Application;

//ToDo add logger

let httpServer;
let httpsServer;

app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    let newDate = new Date(Date.now());
    console.log(`${newDate.toDateString()} ${newDate.toTimeString()}` + " on " + req.url);
    next();
});
app.use('/api', routes);


 setupDb().then(() => {
     startServer()
})

httpServer = http.createServer(this.app);

async function setupDb() {
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
};

function startServer() {
    httpServer.listen(config.port, () => {
        console.log(`HTTP Server started at port: ${config.port}`);
    });
}
