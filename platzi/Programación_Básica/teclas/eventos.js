/*Interacciones*/  /*Variables*/
document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area_del_dibujo");

var papel = cuadrito.getContext("2d");

var x = 150;
var y = 150;

var teclas = {/*variable dentro de una variable*/
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};


/*Funciones*/

function dibujarTeclado(evento)
{
  var colorcito = "yellow";
   var movimiento = 10;
  switch(evento.keyCode) /*estructura de toma de desiciones*/
  {
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x , y - movimiento, papel );
      console.log("arriba");
      y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x , y , x , y + movimiento, papel);
      console.log("abajo");
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y , x - movimiento, y, papel);
      console.log("izquierda");
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      console.log("derecha");
      x = x + movimiento;
    break;
    default:
      console.log("otra tecla");
    break;
  }
}
function dibujarLinea(color, xinicial , yinicial , xfinal , yfinal, lienzo)
{
  lienzo.beginPath();/*iniciar un trazo en js*/
  lienzo.strokeStyle = color; /*variable que permite elegir tipo de trazo y color*/
  lienzo.moveTo(xinicial, yinicial); /*funcion de js para iniciar el trazo*/
  lienzo.lineTo(xfinal, yfinal);/*funcion para trazar la linea*/
  lienzo.stroke();/*realizar linea, circulo, forma, etc*/
  lienzo.closePath();/*terminar un trazo*/
}
 dibujarLinea("red", 150, 150, 151, 151, papel);

/*--Dibujo--*/
/*Bordes*/
dibujarLinea("black", 0,0,0, 300, papel);
dibujarLinea("black", 0 , 300, 300,300, papel);
dibujarLinea("black" ,0,0,300, 0, papel );
dibujarLinea("black", 300,0 , 300, 300, papel);
