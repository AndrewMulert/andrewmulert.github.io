import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema({
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
    button: {
        text: { type: String },
        href: { type: String },
        id: { type: String }
    },
    order: {
        mediumView: {
            row: Number,
            column: Number
        },
        largeView: {
            row: Number,
            column: Number
        },
        position: {
            type: Number
        }
    }
},
{collection: 'interests'});

const Interest = mongoose.model('Interest', interestSchema);

export default Interest;