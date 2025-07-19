import { Router } from 'express';
import About from '../../models/About.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const about = await About.find().sort({_id: 1 });

        console.log('Fetched About:', about);
        console.log('Number of About:', about.length);
        
        res.render('about/index', {
            title: 'About - Andrew Mulert',
            heroImage: 'hero_image_perrine_bridge', 
            heroAlt: 'The Perrine Bridge by Andrew Mulert',
            heroTextAlt: 'Information to get to know me better',
            heroTextHeader: 'About',
            heroTextParagraph: 'Where I have been and what I have accomplished',
            about: about
        });
    } catch (err) {
        console.error('Error fetching about', err);
        nextTick(err);
    }
});

export default router;