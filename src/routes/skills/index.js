import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('skills/index', {
        title: 'Skills - Andrew Mulert',
        heroImage: 'hero_image_mountains', 
        heroAlt: 'The Grand Tetons by Andrew Mulert',
        heroTextAlt: 'Some of the coding languages that I have learned',
        heroTextHeader: 'Skills',
        heroTextParagraph: 'There is always more you can learn,<br>and skills you can improve.'});
});

export default router;