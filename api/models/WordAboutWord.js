/**
 * WordAboutWord.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      word: {
          required: true,
          model: 'slovo'
      },

      addedAt: {
          type: 'number',
          description: 'Дата добавления',
          example: 1502844074211
      },

      addedBy: {
          required: true,
          model: 'user'
      },

      aboutWord: {
          type: 'string',
          required: true
      }

  }

};

