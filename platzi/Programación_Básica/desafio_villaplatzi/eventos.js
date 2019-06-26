var d = document.getElementById('villa_platzi');
var papel = d.getContext("2d");
/*ruta donde se carga la imagen del maopa*/



/* 1 15.6.19 _______Se define una nueva funcion llamada "cargar", fondo, vaca, pollo, CERDO
para definir el momento de carga de las imagenes y asignarle una especie de orden,
así se resolvería el problema de la carga de vaca, pollo o cerdo antes que el fondo*/
  /*15.6 _ 2 definiendo una variable con la sintaxis de json, para separar sus
  variables internas se utiliza una coma ",""  */
var vaca = {
  /*como en programacion web se define la direccion*/
  url: "vaca.png",
  cargaOK: false
};

var fondo ={
  url: "tile.png",
  cargaOK:false
};




/*creando o una nueva imagen
lo mismo que hace la etiqueta "img" en html*/
fondo.imagen = new Image();

/* se define la ruta de la imagen que va a aparecer*/
/*en este caso se le asigna esa ruta a la variable "mapa"
que a su ves está definida con la "raíz" de dondo proviene la imagen*/
fondo.imagen.src = fondo.url;

/*escuchador de eventos, dentro dos parámetros; este escuchador de eventos
se encarga de agregar un evento de carga a través de parámetros(que van dentro de los
paréntesis).
----el primer parpametro "load- carga" se encarga de cargar la imagen a la pagina
----el segundo parámetro es una función*/
fondo.imagen.addEventListener("load" , cargarfondo);




/*IMG VACA/
/*agregando la imagen "vaca" de una forma directa sin crear un avraiable
con la "raíz de la imagen*/
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvaca);

/*IMG CERDO*/

/*IMG POLLO*/


function cargarfondo()
{
 fondo.cargaOK = true;
 dibujar();
}

function cargarvaca()
{
 vaca.cargaOK = true;
 dibujar();
}

/*agregando fondo*/
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen,0,0);
  }
  /*15.6 _3    agregando vaca*/
  if(vaca.cargaOK)
  {
    /*15.6_4 ciclo para dibujar 10 vacas*/
    for( var i=0; i <10; i++ )
    {
      var x = aleatoria(0, 420);
      var y = aleatoria(0, 420);
      papel.drawImage(vaca.imagen,x,y);
    }

  }
}


 var z;
function aleatoria(min, maxi)
{ /* las variables definidas dentro de llaves sólo viven dentro de las mismas
  una variable declarada de ntro de llaves llamada fuera de ellas no existe*/
  var resultado;

  /*función matemática para obtener un número ramdom en cierto rango*/
  resultado =Math.floor( Math.random() * (maxi - min + 1)) + min;


  /*palabra reservada para devolver "algo"*/
  return resultado;
}
