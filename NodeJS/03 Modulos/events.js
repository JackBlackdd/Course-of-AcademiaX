const events = require('events');

const emisor = new events.EventEmitter();

emisor.on('lenguaje', (lenguaje, framework) => {
    console.log(`El lenguaje es ${lenguaje} y el framework es ${framework}`);
});

emisor.emit('lenguaje', 'JavaScript', 'Express');
emisor.emit('lenguaje', 'Java', 'Spring');
emisor.emit('lenguaje', 'Python', 'Django');