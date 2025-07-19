import express from 'express';
import path from 'path';

/** @type {Array<{route: string, dir: string}|string>} Static path configurations */
const staticPaths = [
    { route: '/css', dir: '/public/css' },
    { route: '/js', dir: '/public/js' },
    { route: '/images', dir: '/public/images' }
 ];
 
 /** Brother Keer's Unique Function
  * @param {Object} app - The Express application instance.
  */
 const configureStaticPaths = (app) => {
     // Track registered paths
     const registeredPaths = new Set(app.get('staticPaths') || []);
     
     staticPaths.forEach((pathConfig) => {
         const pathKey = typeof pathConfig === 'string' ? pathConfig : pathConfig.route;
         
         if (!registeredPaths.has(pathKey)) {
             registeredPaths.add(pathKey);
             
             if (typeof pathConfig === 'string') {
                 // Register the path directly
                 app.use(pathConfig, express.static(pathConfig));
             } else {
                 // Register the path with the specified route and directory
                 app.use(pathConfig.route, express.static(path.join(process.cwd(), pathConfig.dir)));
             }
         }
     });
 
     // Update the app settings with the newly registered paths
     app.set('staticPaths', Array.from(registeredPaths));
 };

 /**
 * Returns the navigation menu.
 *
 * @returns {string} The navigation menu.
 */

const getNav = () => {
    return `
    <nav class="nav_bar">
        <ul class="nav_items">
            <li class="nav_link_container"><a href="/" class="nav_links" id="home_link">Andrew Mulert</a><button id="dropDown">▼</button></li>
            <li class="nav_link_container"><a href="about" class="page_link">About</a></li>
            <li class="nav_link_container"><a href="skills" class="page_link">Skills</a></li>
            <li class="nav_link_container"><a href="projects" class="page_link">Projects</a></li>
            <li class="nav_link_container"><a href="interests" class="page_link">Interests</a></li>
            <li class="nav_link_container"><a href="contact" class="page_link">Contact</a></li>
        </ul> 
    </nav>`;
}

export { configureStaticPaths, getNav};