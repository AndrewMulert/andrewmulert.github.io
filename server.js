import 'dotenv/config';

import configNodeEnv from './src/middleware/node-env.js';
import express from 'express';
import homeRoute from './src/routes/index.js';
import aboutRoute from './src/routes/about/index.js';
import contactRoute from './src/routes/contact/index.js';
import interestsRoute from './src/routes/interests/index.js';
import projectsRoute from './src/routes/projects/index.js';
import skillsRoute from './src/routes/skills/index.js';
import layouts from './src/middleware/layouts.js';
import path from 'path';
import { configureStaticPaths } from './src/utils/index.js'
import { notFoundHandler, globalErrorHandler } from './src/middleware/error-handler.js';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mode = process.env.NODE_ENV;
const port = process.env.PORT;


const app = express();

app.use(configNodeEnv);

configureStaticPaths(app);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.set('layout default', 'default');
app.set('layouts', path.join(__dirname, 'src/views/layouts'));
app.use(layouts);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/interests', interestsRoute);
app.use('/projects', projectsRoute);
app.use('/skills', skillsRoute);

//app.use(notFoundHandler);
//app.use(globalErrorHandler);


if (mode.includes('dev')) {
    const ws = await import('ws');

    try {
        const wsPort = parseInt(port) + 1;
        const wsServer = new ws.WebSocketServer({ port: wsPort });

        wsServer.on('listening', () => {
            console.log(`WebSocket server is running on port ${wsPort}`);
        });

        wsServer.on('error', (error) => {
            console.error('WebSocket server error:', error);
        });
    } catch (error) {
        console.error('Failed to start WebSocket server:', error);
    }
}


app.listen(port, async () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});