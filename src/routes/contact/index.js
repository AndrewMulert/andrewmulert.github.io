import { Router } from 'express';
import Contact from '../../models/Contact.js'

const router = Router();

router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({_id: 1 });

        console.log('Fetched Contacts:', contacts);
        console.log('Number of Contacts:', contacts.length);
        
        res.render('contact/index', {
            title: 'Contact - Andrew Mulert',
            heroImage: 'hero_image_night_sky', 
            heroAlt: "The Night Sky above Teton River Dam by Andrew Mulert",
            heroTextAlt: 'Ways to get in contact with me',
            heroTextHeader: 'Contact',
            heroTextParagraph: 'I am on many different Social Media platforms.<br>Please inform me of your opinions concerning my website',
            heroTextDescription: 'I am on many different Social Media platforms. Please inform me of your opinions concerning my website',
            contacts: contacts
       });
    } catch (err) {
        console.error('Error fetching interests', err);
        nextTick(err);
    }
});

export default router;