/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    hi: function(req, res) {
        var idparam = req.param('idd');

        res.send("Hello, "+idparam);
    },

    about: function(req, res) {
        res.send("Hello, from action 'about'");
    },

    index: function(req, res) {
        res.send("This is index page");
    }


};

