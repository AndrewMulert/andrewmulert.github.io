import { Router } from 'express';

const router = Router();
 
// The home page route
router.get('/', async (req, res) => {
    res.render('index', { 
        title: 'Andrew Mulert', 
        heroImage: 'hero_image_waterfall', 
        heroAlt: 'The Upper Mesa Waterfall by Andrew Mulert',
        heroTextAlt: 'Welcome to my Website',
        heroTextHeader: 'Enthusiastic about Design,<br>Focused on the Future.',
        heroTextParagraph: 'I have a passion for technology,<br>and an interest in how art is designed.'
    });
});

export default router;