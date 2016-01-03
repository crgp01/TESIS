/**
 * InformacionController
 *
 * @description :: Server-side logic for managing Informacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {

        return res.redirect('/Informacion/main');

    },

    main: function (req, res) {
        var menu = req.param("id");


        res.view({
            menu: menu
        });
    }


};