import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
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
        smallSrc: { type: String},
        mediumSrc: { type: String},
        minSrc: { type: String},
        alt: { type: String},
        orientation: {
            type: String,
            enum: ['horizontal', 'vertical']
        }
    },
    button: [{
        text: { type: String },
        href: { type: String },
        id: { type: String }
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
{collection: 'projects'});

const Project = mongoose.model('Project', projectSchema);

export default Project;