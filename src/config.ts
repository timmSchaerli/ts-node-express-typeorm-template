import * as dotenv from 'dotenv';

dotenv.config();

export default {
    name: 'ts-node-express-typeorm-template',
    version: '0.1.0',
    port: 1234,
    db: {
        host: '',
        port: '',
        username: '',
        password: '',
        database: ''
    }

};
