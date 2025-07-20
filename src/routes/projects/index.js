import { Router } from 'express';
import Project from '../../models/Project.js'

const router = Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({_id: 1 });

        console.log('Fetched Projects:', projects);
        console.log('Number of Projects:', projects.length);
        
        res.render('projects/index', {
            title: 'Projects - Andrew Mulert',
            heroImage: 'hero_image_sky', 
            heroAlt: 'A photograph of the clouds at sunset by Andrew Mulert',
            heroTextAlt: 'What I have built and am currently working on',
            heroTextHeader: 'Projects',
            heroTextParagraph: 'A display of the designs I have created<br>and projects I have had a hand in',
            projects: projects
        });
    } catch (err) {
        console.error('Error fetching interests', err);
        nextTick(err);
    }
});

export default router;