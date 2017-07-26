import mongoose from 'mongoose';

const Content = mongoose.Schema({
    key: String,
    icon: String,
    header: String,
    content: String,
    group: String,
    interest: String
}, {
    timestamps: true,
    minimize: false
});

module.exports = mongoose.model('Content', Content);
