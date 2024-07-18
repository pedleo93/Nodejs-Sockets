const { v4: uuidv4 } = require('uuid');

class Partido {

    constructor(nombre) {

        this.id = uuidv4();
        this.nombre = nombre;
        this.votos = 0;
    }

}

module.exports = Partido;
