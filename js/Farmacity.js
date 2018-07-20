var productos = [
    {articulo:"zapatillas",precio:300},
    {articulo:"arepa",precio:150},
];

console.log(productos[0].zapatillas);

function Vendedor(nombre,dni,cuil,turno) {
    this.nombre = nombre;
    this.dni = dni;
    this.cuil = cuil;
    this.turno = turno;
}

vendedor1 = new Vendedor ("Juan", 23456789,20234567892,"noche");


function Cliente (nombre,pedido,dni,saldo,articulo) {
    this.nombre = nombre;
    this.dni = dni;
    this.pedido = function(){
        for(){
            if(articulo == productos[i].articulo)
            {
                if(productos[i].precio <= saldo)
                {
                    console.log("compro");
                }
                else{
                    console.log("no compro");
                }
                //console.log(productos[i].precio);
            }
        }
    }
    this.saldo
    this.articulo
}

var cliente1 = new CLiente("Denise", "quiero unas zapatillas",35789879,1000,"zapatillas");
var cliente2 = new CLiente("Avelino", "quiero arepas", 65840033, 40,"arepas" );
cliente2.pedido();