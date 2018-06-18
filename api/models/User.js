/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      userName: {
          type: 'string',
          required: true,
          maxLength: 100
      },

      email: {
          type: 'string',
          required: true,
          maxLength: 50,
          unique: true,
          email: true
      },

      phone: {
          type: 'string',
          required: false

      }

  }

};

