/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        apiToken: { type: 'string' },
    },
    customToJSON: function() {
        return _.omit(this, 'password');
    }

};
