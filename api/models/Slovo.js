/**
 * Slovo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      word: {
          type: 'string',
          required: true,
          unique: true,
          maxLength: 80
      },

      addedAt: {
          type: 'number',
          description: 'Дата добавления',
          example: 1502844074211
      },

      addedBy: {
          required: true,
          model: 'person'
      },

      aboutWord: {
          model: 'wordAboutWord'
      }


  }

};

