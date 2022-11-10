var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Anaconda_controller = require('../controllers/Anaconda');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Anaconda ROUTES ///
// POST request for creating a Anaconda.
router.post('/Anaconda', Anaconda_controller.Anaconda_create_post);
// DELETE request to delete Anaconda.
router.delete('/Anaconda/:id', Anaconda_controller.Anaconda_delete);
// PUT request to update Anaconda.
router.put('/Anaconda/:id', Anaconda_controller.Anaconda_update_put);
// GET request for one Anaconda.
router.get('/Anaconda/:id', Anaconda_controller.Anaconda_detail);
// GET request for list of all Anaconda items.
router.get('/Anaconda', Anaconda_controller.Anaconda_list);
module.exports = router;