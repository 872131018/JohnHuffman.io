import mongoose from 'mongoose';
import Content from './models/Content';
import ContentSeed from './seeds/Content';
/**
* Create a mongo connection
*/
mongoose.connect('mongodb://mongo/JohnHuffman');

/**
* Load database and its data
*/
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    for(let seed of ContentSeed) {
        let content = new Content(seed);
        content.save();
    }
});

module.exports = db;
