/**
 * Content.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        key: {
            type: 'string'
        },
        header: {
            type: 'string'
        },
        interest: {
            type: 'string'
        },
        group: {
            type: 'string'
        }
    },
};
