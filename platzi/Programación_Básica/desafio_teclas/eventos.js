/*-----variables----*/
var d = document.getElementById("canvas_dibujando_mouse")
var lienzo = d.getContext("2d");
/*----bordes--*/

dibujar_linea("black",1,1,699,1) /*arriba*/
dibujar_linea("black",1,1,1,399 )/*izquierda*/
dibujar_linea("black",1,399,699,399)/*abajo*/
dibujar_linea("black",699,1,699,699 ) /*derecha*


/*---------funciones------*/
function dibujar_linea(color, xinicial , yinicial , xfinal, yfinal)
{
  lienzo.beginPath()
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}
