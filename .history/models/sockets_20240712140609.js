const PartidosLista = require('./partidos-lista');


class Sockets {

    constructor(io) {

        this.io = io;
        this.Partidos = new PartidosLista();

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado');
            // Emitir al cliente conectado, todas los partidos actuales
            socket.emit('partidos-actuales', this.Partidos.obtenerPartidos());
            // votar por el partido
            socket.on('voto-partido', (id) => {
                console.log(id);
                this.Partidos.incrementarVotos(id);
                this.io.emit('partidos-actuales', this.Partidos.obtenerPartidos());
            });

            // Borrar Partido
            socket.on('borrar-partido', (id) => {
                this.Partidos.eliminarPartido(id);
                this.io.emit('partidos-actuales', this.Partidos.obtenerPartidos());
            });

            // Cambiar nombre del partido
            socket.on('cambiar-nombre-partido', ({ id, nombre }) => {
                this.Partidos.cambiarNombre(id, nombre);
                this.io.emit('partidos-actuales', this.Partidos.obtenerPartidos());
            });

            // Crear una nueva Partido
            socket.on('crear-partido', ({ nombre }) => {
                this.Partidos.agregarPartido(nombre);
                this.io.emit('partidos-actuales', this.Partidos.obtenerPartidos());
            });

        });
    }


}


module.exports = Sockets;