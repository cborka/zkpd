/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      personName: {
          type: 'string',
          required: true,
          maxLength: 100
      },

      password: {
          type: 'string',
          required: true,
          description: 'Зашифрованный пароль',
          protect: true
      },

      fullName: {
          type: 'string',
          required: true,
          description: 'Полное имя',
          maxLength: 120,
          example: 'Иванов Иван Иванович'
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

