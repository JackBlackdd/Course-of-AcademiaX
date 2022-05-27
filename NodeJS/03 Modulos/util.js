const util = require('util');
const fs = require('fs');

// export NODE_DEBUG=desarrollo
const depurar = util.debuglog('desarrollo');
console.log('Log'); 
depurar('Depuración');

