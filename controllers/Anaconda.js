var Anaconda = require('../models/Anaconda');
// List of all Anacondas
exports.Anaconda_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Anaconda list');
};
// for a specific Anaconda.
exports.Anaconda_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Anaconda detail: ' + req.params.id);
};
// Handle Anaconda create on POST.
exports.Anaconda_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Anaconda create POST');
};
// Handle Anaconda delete form on DELETE.
exports.Anaconda_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Anaconda delete DELETE ' + req.params.id);
};
// Handle Anaconda update form on PUT.
exports.Anaconda_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Anaconda update PUT' + req.params.id);
};
exports.Anaconda_list = async function(req, res) {
    try{
    theAnacondas = await Anaconda.find();
    res.send(theAnacondas);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.Anaconda_view_all_Page = async function(req, res) {
    try{
    theAnacondas = await Anaconda.find();
    res.render('Anaconda', { title: 'Anaconda Search Results', results: theAnacondas });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.Anaconda_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Anaconda();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Anaconda_type":"goat", "cost":12, "size":"large"}
    document.Ananconda_color = req.body.Ananconda_color;
    document.Ananconda_petname = req.body.Ananconda_petname;
    document.Ananconda_price = req.body.Ananconda_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.Anaconda_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Anaconda.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
exports.Anaconda_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Anaconda.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Ananconda_color)  
               toUpdate.Ananconda_color = req.body.Ananconda_color; 
        if(req.body.Ananconda_petname) toUpdate.Ananconda_petname = req.body.Ananconda_petname; 
        if(req.body.Ananconda_price) toUpdate.Ananconda_price = req.body.Ananconda_price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 