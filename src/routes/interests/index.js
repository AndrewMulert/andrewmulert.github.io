import { Router } from 'express';
import Interest from '../../models/Interest.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const interests = await Interest.find().sort({_id: 1 });

        console.log('Fetched Interests:', interests);
        console.log('Number of Interests:', interests.length);
        
        res.render('interests/index', {
            title: 'Interests - Andrew Mulert',
            heroImage: 'hero_image_lake', 
            heroAlt: "The Lake at Coeur d'Alene by Andrew Mulert",
            heroTextAlt: 'Different Hobbies, Activities, and Media that I enjoy',
            heroTextHeader: 'Interests',
            heroTextParagraph: 'A few of the stories, games,<br>movies, and activities that inspire and excite me.',
            interests: interests
        });
    } catch (err) {
        console.error('Error fetching interests', err);
        nextTick(err);
    }
});

export default router;