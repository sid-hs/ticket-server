const TicketList = require('./ticket-list');


class Sockets {

    constructor( io ) {

        this.io = io;

        // instancia ticketlist
        this.ticketList = new TicketList();



        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
        
            console.log('cliente conectado'); 

            socket.on('solicitar-ticket',() => {

                // const nuevoTicket = this.ticketList.crearTicket();
                // callback(nuevoTicket);
                console.log('nuevoTicket');          
            
            });
            // Escuchar evento: mensaje-to-server
            // socket.on('mensaje-to-server', ( data ) => {
            //     console.log( data );
                
            //     this.io.emit('mensaje-from-server', data );
            // });            
        
        });
    }


}


module.exports = Sockets;