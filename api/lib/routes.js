var chordController = require('./controllers/chordsController');
var keyController = require('./controllers/keysController');
var phraseController = require('./controllers/phrasesController');

module.exports = function(server) {
    server.get('/chords', chordController.getAll);
    server.get('/chord/:name', chordController.getChord);
    server.post('/chord', chordController.addChord);
    server.del('/chord/:id', chordController.deleteChord);
    server.put('/chord', chordController.updateChord);
    server.get('/chord/search/:name', chordController.searchByName);

    server.get('/keys', keyController.getAll);
    server.get('/key/:name', keyController.getKey);
    server.post('/key', keyController.addKey);
    server.del('/key/:id', keyController.deleteKey);
    server.put('/key', keyController.updateKey);
    server.get('/key/search/:name', keyController.searchByName);

    server.get('/phrases', phraseController.getAll);
    server.get('/phrase/:name', phraseController.getPhrase);
    server.post('/phrase', phraseController.addPhrase);
    server.del('/phrase/:id', phraseController.deletePhrase);
    server.put('/phrase', phraseController.updatePhrase);
    server.get('/phrase/search/:name', phraseController.searchByName);
};