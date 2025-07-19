import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    timeStamp: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        smallSrc: { type: String, required: true },
        mediumSrc: { type: String, required: true },
        minSrc: { type: String, required: true },
        alt: { type: String, required: true },
        orientation: {
            type: String,
            enum: ['horizontal', 'vertical'],
            required: true
        }
    },
    button: [{
        text: { type: String },
        href: { type: String }
    }],
    order: {
        mediumView: {
            row: Number,
            column: Number
        }
    }
},
{collection: 'about'});

const About = mongoose.model('About', aboutSchema);

export default About;