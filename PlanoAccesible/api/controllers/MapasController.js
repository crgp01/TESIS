/**
 * MapasController
 *
 * @description :: Server-side logic for managing mapas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {

        return res.redirect('/Mapas/main');

    },

    main: function (req, res) {
        var titulooficina = req.param("id");
        var idsvgplano = req.param("id");
        var datosvista = "";

        sails.log("variable sin inicializar: " + titulooficina);

        switch (titulooficina) {
        case '10':
            titulooficina = "Oficina Dennys Flores";
            datosvista = "<div> informacion de oficina Dennys Flores" +
                "</div>";
            break;

        case '9':
            titulooficina = "Oficina Sandra Sanchez";
            datosvista = "<div> informacion de oficina Sandra Sanchez" +

                "</div>";
            break;

        default:
            titulooficina = "";
            datosvista = "";
        }

        sails.log("variable inicializada: " + titulooficina);

        res.view({
            titulooficina: titulooficina,
            datosvista: datosvista,
            idsvgplano: idsvgplano
        });
    }

};