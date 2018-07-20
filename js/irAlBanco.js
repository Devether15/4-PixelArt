function Persona(nombre,billetera) {
    this.nombre = nombre;
    this.billetera = billetera;
    this.enriquecer = function(monto){
        this.billetera += monto;
    };
}



function Banco(consultarSaldo,) {
    var usuarios = {
    'juan':300,
    'pedro':700,

    };
    this.consultarSaldo = function(nombre){
        this.usuarios = monto;
    };
    this.extraer = function(nombre, monto){
        this.billetera += monto;
    }
}

persona1 = new persona1 ("juan", 3000);
