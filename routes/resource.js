var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');

// Require controller modules. 
var api_controller = require('../controllers/api.js'); 
var costume_controller = require('../controllers/costume.js'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', costume_controller.costume_list); 
router.get('/api', api_controller.api); 
router.delete('/', api_controller.api); 

/* GET delete costume page */ 
router.get('/delete', costume_controller.costume_delete_Page); 

/* GET create update page */ 
router.get('/update', costume_controller.costume_update_Page); 

/* GET create costume page */ 
router.get('/create', costume_controller.costume_create_Page); 

/* GET detail costume page */ 
router.get('/detail', costume_controller.costume_view_one_Page); 

 // GET request for one costume. 
router.get('/costumes/:id', costume_controller.costume_detail); 

/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/costumes', costume_controller.costume_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/costumes/:id', costume_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/costumes/:id', costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/costumes/:id', costume_controller.costume_detail); 
 
// GET request for list of all Costume items. 
router.get('/costumes', costume_controller.costume_list); 
 


module.exports = router;