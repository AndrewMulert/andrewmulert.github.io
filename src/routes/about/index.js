import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('about/index', {
        title: 'About - Andrew Mulert',
        heroImage: 'hero_image_perrine_bridge', 
        heroAlt: 'The Perrine Bridge by Andrew Mulert',
        heroTextAlt: 'Information to get to know me better',
        heroTextHeader: 'About',
        heroTextParagraph: 'Where I have been and what I have accomplished'});
});

export default router;