import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('contact/index', {
        title: 'Contact - Andrew Mulert',
        heroImage: 'hero_image_night_sky', 
        heroAlt: "The Night Sky above Teton River Dam by Andrew Mulert",
        heroTextAlt: 'Ways to get in contact with me',
        heroTextHeader: 'Contact',
        heroTextParagraph: 'I am on many different Social Media platforms.<br>Please inform me of your opinions concerning my website'});
});

export default router;