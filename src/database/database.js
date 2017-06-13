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
    /**
    * Empty collect before refilling
    */
    Content.remove({}, () => {
        console.log('Content collection cleared')
    });
    /**
    * Seed the database content
    */
    for(let seed of ContentSeed.about) {
        let content = new Content(seed);
        content.save();
    }
    for(let seed of ContentSeed.interests) {
        let content = new Content(seed);
        content.save();
    }
});

module.exports = db;
