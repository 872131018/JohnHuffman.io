import mongoose from 'mongoose';

const Content = mongoose.Schema({
    key: String,
    header: String,
    Content: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Content', Content);
