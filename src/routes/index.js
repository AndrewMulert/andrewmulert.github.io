import { Router } from 'express';
import Home from '../models/Home.js';

const router = Router();
 
// The home page route
router.get('/', async (req, res) => {
    try {
        const home = await Home.find().sort({_id: 1 });

        console.log('Fetched Home:', home);
        console.log('Number of Home:', home.length);
        
        res.render('index', { 
            title: 'Andrew Mulert', 
            heroImage: 'hero_image_waterfall', 
            heroAlt: 'The Upper Mesa Waterfall by Andrew Mulert',
            heroTextAlt: 'Welcome to my Website',
            heroTextHeader: 'Enthusiastic about Design,<br>Focused on the Future.',
            heroTextParagraph: 'I have a passion for technology,<br>and an interest in how art is designed.',
            heroTextDescription: 'I have a passion for technology, and an interest in how art is designed.',
            home: home
        });
    } catch (err) {
        console.error('Error fetching about', err);
        nextTick(err);
    }
});

export default router;