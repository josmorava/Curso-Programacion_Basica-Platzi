var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
/*al escribir dibujoPorClick sin parentesis
estamos nombrando la variable y aclarando
que se va a ejecutar después del "click",
en caso contrario de escrbirla dibujoPorClick()
se está aclarando que se va a ejecutar esa
variable de una vez y no después de "click" */

/*addEventListener es un escuchador que hace que lo
que esté dentro de los parentesis ocurra, en este caso le
ocurra al boton*/
var d = document.getElementById("dibujito");
var ancho = d.width;

var lienzo = d.getContext("2d");/*declarar
que tipo de dibujo se va a realizar*/


/*------------------------------*/
/*---------FUNCIONES------------*/
/*------------------------------*/
/*baton*/

/*canvas*/
function dibujarLinea(color, xinicial , yinicial , xfinal , yfinal)
{
  lienzo.beginPath();/*iniciar un trazo en js*/
  lienzo.strokeStyle = color; /*variable que permite elegir tipo de trazo y color*/
  lienzo.moveTo(xinicial, yinicial); /*funcion de js para iniciar el trazo*/
  lienzo.lineTo(xfinal, yfinal);/*funcion para trazar la linea*/
  lienzo.stroke();/*realizar linea, circulo, forma, etc*/
  lienzo.closePath();/*terminar un trazo*/
}

/*-----------------------------*/
/*           BORDES            */
/*-----------------------------*/
dibujarLinea("black", 0,0,0, 400);
dibujarLinea("black", 0 , 400, 400,400);
dibujarLinea("black" ,0,0,400, 0 );
dibujarLinea("black", 400,0 , 400, 400);

function dibujoPorClick()
{
  var lineas =  parseInt(texto.value);
  var l = 0;
  var yi , xf;
  var espacio = ancho / lineas;

  for(l=0 ; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#D35400",0, yi ,xf , 400);

    yi = 400 - (l * espacio);
    xf = 400 - (l * espacio);
    dibujarLinea("#2E86C1",400, yi, xf,0 );
    console.log ("linea" + l);
  }
}
