import { Router } from 'express';
import Skill from '../../models/Skill.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find().sort({_id: 1 });

        console.log('Fetched Skills:', skills);
        console.log('Number of Skills:', skills.length);
        
        res.render('skills/index', {
            title: 'Skills - Andrew Mulert',
            heroImage: 'hero_image_mountains', 
            heroAlt: 'The Grand Tetons by Andrew Mulert',
            heroTextAlt: 'Some of the coding languages that I have learned',
            heroTextHeader: 'Skills',
            heroTextParagraph: 'There is always more you can learn,<br>and skills you can improve.',
            skills: skills
        });
        
    } catch (err) {
        console.error('Error fetching about', err);
        nextTick(err);
    }
});

export default router;