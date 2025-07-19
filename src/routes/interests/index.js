import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('interests/index', {
        title: 'Interests - Andrew Mulert',
        heroImage: 'hero_image_lake', 
        heroAlt: "The Lake at Coeur d'Alene by Andrew Mulert",
        heroTextAlt: 'Different Hobbies, Activities, and Media that I enjoy',
        heroTextHeader: 'Interests',
        heroTextParagraph: 'A few of the stories, games,<br>movies, and activities that inspire and excite me.'});
});

export default router;