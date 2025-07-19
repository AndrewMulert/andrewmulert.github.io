import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
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
        },
        largeView: {
            row: Number,
            column: Number
        }
    }
},
{collection: 'skills'});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;