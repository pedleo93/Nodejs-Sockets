const Partido = require('./partido');

class PartidosLista {

    constructor() {

        this.partidos = [
            new Partido('Morena'),
            new Partido('PAN'),
            new Partido('PRI'),
            new Partido('PT'),
        ];
    }

    agregarPartido(nombre) {
        const nuevoPartido = new Partido(nombre);
        this.partidos.push(nuevoPartido);
        return this.partidos;
    }

    eliminarPartido(id) {
        this.partidos = this.partidos.filter(partido => partido.id !== id);
    }

    obtenerPartidos() {
        return this.partidos;
    }

    incrementarVotos(id) {
        this.partidos = this.partidos.map(partido => {
            if (partido.id === id) {
                partido.votos += 1;
            }
            return partido;

        })
    }

    cambiarNombre(id, nuevoNombre) {
        this.partidos = this.partidos.map(partido => {
            if (partido.id === id) {
                partido.nombre = nuevoNombre;
            }
            return partido;
        })
    }
}

module.exports = PartidosLista;