import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('projects/index', {
        title: 'Projects - Andrew Mulert',
        heroImage: 'hero_image_sky', 
        heroAlt: 'A photograph of the clouds at sunset by Andrew Mulert',
        heroTextAlt: 'What I have built and am currently working on',
        heroTextHeader: 'Projects',
        heroTextParagraph: 'A display of the designs I have created<br>and projects I have had a hand in'});
});

export default router;