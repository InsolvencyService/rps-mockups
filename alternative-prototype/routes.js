module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
                {'assetPath' : assetPath});

    });

    app.get('/claim_notice', function (req, res) {

      res.render('claim_notice',
                {'assetPath' : assetPath});

    });

    app.get('/sample', function (req, res) {

      res.render('sample',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/template-partial-areas', function (req, res) {

      res.render('examples/template_partial_areas',
                {'assetPath' : assetPath});

    });

    /* Elements pages */

    app.get('/examples/elements/intro', function (req, res) {
      res.render('examples/elements/intro', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/grid-layout', function (req, res) {
      res.render('examples/elements/grid_layout', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/typography', function (req, res) {
      res.render('examples/elements/typography', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/forms', function (req, res) {
      res.render('examples/elements/forms', {'assetPath' : assetPath });
    });

  }
};
