import { getNav } from '../utils/index.js';

const configureNodeEnvironment = (req, res, next) => {
    const currentPort = process.env.PORT || 3000;
    const currentMode = process.env.NODE_ENV || 'production';

    res.locals.isDevMode = currentMode.includes('dev');
    res.locals.navHTML = getNav();
    res.locals.port = currentPort;
    res.locals.scripts = [];
    res.locals.styles = [];

    if (res.locals.isDevMode) {

        res.locals.scripts.push(`
            <script>
                const ws = new WebSocket('ws://127.0.0.1:${parseInt(currentPort) + 1}');
                ws.onclose = () => {
                    setTimeout(() => location.reload(), 2000);
                };
            </script>    
        `);
    }

    next();
};

export default configureNodeEnvironment;