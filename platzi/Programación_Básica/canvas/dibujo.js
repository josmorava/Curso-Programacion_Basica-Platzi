var d = document.getElementById("dibujito");
/*para llegar a un id en js declarado en html
primero de declara donde está el id (document)
seguido de un punto (.) seguido de:
" getElementById("") seguido
del nombre del id; document.getElementById("dibujito")"
*/
var lienzo = d.getContext("2d");/*declarar
que tipo de dibujo se va a realizar*/
var lineas = 30;
var l = 0;
var yi , xf;

for(l=0 ; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("blue",0, yi ,xf , 300);
  console.log ("linea" + l);
}

/*-----------------------------*/
/*           BORDES            */
/*-----------------------------*/
dibujarLinea("black", 0,0,0, 300);
dibujarLinea("black", 0 , 300, 300,300);
dibujarLinea("black" ,0,0,300, 0 );
dibujarLinea("black", 300,0 , 300, 300);


function dibujarLinea(color, xinicial , yinicial , xfinal , yfinal)
{
  lienzo.beginPath();/*iniciar un trazo en js*/
  lienzo.strokeStyle = color; /*variable que permite elegir tipo de trazo y color*/
  lienzo.moveTo(xinicial, yinicial); /*funcion de js para iniciar el trazo*/
  lienzo.lineTo(xfinal, yfinal);/*funcion para trazar la linea*/
  lienzo.stroke();/*realizar linea, circulo, forma, etc*/
  lienzo.closePath();/*terminar un trazo*/
}
