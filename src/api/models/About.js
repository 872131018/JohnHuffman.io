/**
 * About.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        key: { type: 'string' },
        icon: { type: 'string' },
        header: { type: 'string' },
        content: { type: 'string' },
        group: { type: 'string' }
    }
};
