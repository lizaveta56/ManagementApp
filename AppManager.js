import express from 'express';
import bodyParser from 'body-parser';
import tempDataToDb from './helpers/tempDataToDb.helper';
import swaggerUi from 'swagger-ui-express';
import expressOasGenerator from 'express-oas-generator';

var cors = require('cors');

export default async (container) => {
    await container.resolve('context').sequelize.sync({force: true});
    await tempDataToDb(container.resolve('context'));

    const app = express();

    expressOasGenerator.init(
        app,
        function(spec) { return spec; }
    );
    
    app.use(cors());

    app.use(bodyParser.json());

    app.use('/api',
        container.resolve('loggerGlobal'),
        container.resolve('cacheGlobal'),
        container.resolve('apiController'),
        container.resolve('errorGlobal')
    );

    return app;
};
