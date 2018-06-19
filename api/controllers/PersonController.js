/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    hi:  function (req, res) {
        res.send('Hello World!');
    },

  addPerson: function (req, res) {

//      res.send(req.method);

      let data = {
        createdAt       : 12345,
        updatedAt       : 12345,
        id              : 11,
        personName      : req.param('personName'),
        password        : req.param('password'),
        fullName        : req.param('fullName'),
        email           : req.param('email'),
        phone           : req.param('phone')
      };

//      res.send(data.fullName+','+data.email+','+data.password+','+data.personName+','+data.phone);
    sails.log(data.fullName+','+data.email+','+data.password+','+data.personName+','+data.phone);
/*
    var createdUser = Person.create(data).fetch();

    sails.log('Finn\'s id is:', createdUser.id);
    return res.json(createdUser);
*/


      Person.create(data).exec(function (err, Person) {

        if (err) {
          return res.sendStatus(500);
        }

        res.redirect('/home');

      });

  }

}

