var chordController = require('./controllers/chordsController');

module.exports = function(server) {
    server.get('/chords', chordController.getAll);
    
    server.get('/chord/:name', chordController.getChord);
    server.post('/chord', chordController.addChord);
    server.del('/chord/:id', chordController.deleteChord);
    server.put('/chord', chordController.updateChord);

    server.get('/chord/search/:name', chordController.searchByName);
};