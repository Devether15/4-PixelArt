// paso 1, guía 1: variables globales
var paletaColor = document.getElementById('paleta');
var grillaPixel = document.getElementById('grilla-pixeles');
var indicadorColor = document.getElementById('indicador-de-color');
var divPintado = document.getElementsByClassName('color-paleta');
var mouseSi = false;
var borrando = document.getElementById('borrar');
var grillaCompleta = grillaCuadrados;
var cargarBatman = document.getElementById('batman');
var cargarWonder = document.getElementById('wonder');
var cargarFlash = document.getElementById('flash');
var cargarInvisible = document.getElementById('invisible');
var guardarTrabajo =  document.getElementById('guardar');



var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//paso 3g2
colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        indicadorColor.style.backgroundColor = colorActual; 


    })
);


//paso 2g1, generar paleta de colores
function generarPaleta() {
    for (var i = 0; i < nombreColores.length; i++) {
        var nuevoDiv = document.createElement("div");
        nuevoDiv.id = 'color-paleta';
        nuevoDiv.style.backgroundColor = nombreColores[i];
        paletaColor.appendChild(nuevoDiv);
    }
}   
generarPaleta();

// paso 3g1 grilla de pixeles

function grillaCuadrados (){
    for (var i = 0; i < 1751; i++) {
        var nuevoPixel = document.createElement("div");
        grillaPixel.appendChild(nuevoPixel);
    }
}
grillaCuadrados ()

//paso 1 guia 2
paletaColor.addEventListener('click', CambiarColor);

function CambiarColor(e){
    indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}



// paso 2 guía 2
grillaPixel.addEventListener('click', pintarDiv);

function pintarDiv(e){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

// 4g2
function haciendoClick(){
grillaPixel.addEventListener('mousedown',function(){
 if(mouseSi = true);
 console.log("pinto");
})
grillaPixel.addEventListener('mouseup',function(){
 if(mouseSi = false);
 console.log("no pinto");
})};



//5g1

// grillaPixel.addEventListener('mouseover', pintarMoviendo);
// function pintarMoviendo(e){
// if (mouseSi === true)
//     e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
//  })};

   
   grillaPixel.addEventListener("mouseover",pintar);
     function pintar(e){
     if (mouseSi){
        pintarDiv(e);
   }
 }

haciendoClick();

//paso 1 guía 3
borrando.addEventListener("click", borarTodo);

function borarTodo(e){
    console.log("borrando")
    var $grillaCompleta = $("#grilla-pixeles div");
    $grillaCompleta.css({"backgroundColor": "white"});
    // $grillaCompleta.fadeOut(1500);
};

//paso 2 guía 3: Vargar superheroes

//llamando a batman
cargarBatman.addEventListener("click", cargandoBatman);
function cargandoBatman(e){
    $grillaCompleta = cargarSuperheroe(batman);
};

//llamando a wonder
cargarWonder.addEventListener("click", cargandoWonder);
function cargandoWonder(e){
    $grillaCompleta = cargarSuperheroe(wonder);
};

//llamando a flash
cargarFlash.addEventListener("click", cargandoFlash);
function cargandoFlash(e){
    $grillaCompleta = cargarSuperheroe(flash);
};

//llamando a invisible
cargarInvisible.addEventListener("click", cargandoInvisible);
function cargandoInvisible(e){
    $grillaCompleta = cargarSuperheroe(invisible);
};

//intenté hacerlo con un switch pero no me salió

// function cargandoSuper(){
// var cargarCaso = $grillaCompleta = cargarSuperheroe();
//     switch (cargarCaso){
//         case 1:
//         cargarCaso();
//         console.log("cargando batman");
        
//             break;
//         case 2:
//         console.log("cargando wonder");
//             //cargarSuperheroe(wonder);
//             break;
//         case 3:
//         console.log("cargando flash");
//            // cargarSuperheroe(flash);
//             break;
//         case 4:
//         console.log("cargando invisible");
//             //cargarSuperheroe(invisible);
//             break;
//         default:
//     }

//paso 3 guia 3: guardar
guardarTrabajo.addEventListener("click", guardando);
function guardando(e){
    guardarTrabajo = guardarPixelArt();
};



 
